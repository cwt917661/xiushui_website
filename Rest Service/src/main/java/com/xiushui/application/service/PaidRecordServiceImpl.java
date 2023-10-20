package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.mapper.UserDonateResponseMapper;
import com.xiushui.application.repository.PaidRecordRepository;
import com.xiushui.application.repository.UserDonateRepository;
import com.xiushui.application.response.RespGetPaidRecordsWithDonateInfo;
import com.xiushui.application.response.RespRemainingPayment;

@Service
public class PaidRecordServiceImpl implements PaidRecordService
{
	@Autowired
	private PaidRecordRepository paidRecordRepository;

	@Autowired
	private UserDonateRepository userDonateRepository;

	@Override
	public RespGetPaidRecordsWithDonateInfo getRecordsByDonateId(long id) throws Exception
	{
		Optional<UserDonate> donate = userDonateRepository.findById(id);
		if(donate.isEmpty()) 
			throw new Exception("User Donation with ID " + id + " not exist!");
		else {
			RespGetPaidRecordsWithDonateInfo result = new RespGetPaidRecordsWithDonateInfo();
			result.setDonateInfo(UserDonateResponseMapper.INSTANCE.convert(donate.get()));
			
			List<PaidRecord> records = paidRecordRepository.findByUserDonateIdOrderByCreateDtDesc(id);
			result.setRecords(records);
			
			return result;
		}
		
	}

	@Override
	public RespRemainingPayment addNewRecord(PaidRecord record) throws Exception
	{
		int paid = record.getPaid();
		if(paid <= 0) throw new Exception("Please confirm the payment amount!!");
		
		// query donation data to check unpaid money
		Optional<UserDonate> donate = 
				userDonateRepository.findById(record.getUserDonateId());
		
		//1. check donation exist
		if(donate.isEmpty()) 
			throw new Exception("User Donation with ID " + record.getUserDonateId() + " not exist!");
		else {
			int unpaid = donate.get().getUnpaid();
			if(unpaid < paid) 
				throw new Exception("Payment exceed unpaid money.");
			else {				
				// 1. update user donate
				unpaid -= paid;
				UserDonate updated = donate.get();
				updated.setUnpaid(unpaid);
				userDonateRepository.save(updated);
				
				// 2. add record
				PaidRecord newRecord = paidRecordRepository.save(record);
				
				RespRemainingPayment remain = new RespRemainingPayment();
				remain.setRecord(newRecord);
				remain.setRemaining(unpaid);
				return remain;
			}
		}
	}

	@Override
	public int deleteById(long id) throws Exception
	{
		// 1. check paid record exist
		Optional<PaidRecord> paidRecord = paidRecordRepository.findById(id);
		if(paidRecord.isEmpty())
			throw new Exception("Paid Record with ID " + id + " not exist!");
		//2. check donation data exist
		else {
			long donateId = paidRecord.get().getUserDonateId();
			Optional<UserDonate> donate = 
					userDonateRepository.findById(donateId);
			if(donate.isEmpty()) 
				throw new Exception("User Donation with ID " + donateId + " not exist!");
			else {
				
				// 1. delete paid record
				PaidRecord rec = paidRecord.get();
				paidRecordRepository.delete(rec);
				
				// 2. update user donate
				UserDonate ud = donate.get();
				int unpaid = ud.getUnpaid() + rec.getPaid();
				ud.setUnpaid(unpaid);
				userDonateRepository.save(ud);
				
				return unpaid;
			}
		}
	}

	

}
