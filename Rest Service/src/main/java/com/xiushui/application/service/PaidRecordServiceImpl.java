package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.repository.PaidRecordRepository;
import com.xiushui.application.repository.UserDonateRepository;

@Service
public class PaidRecordServiceImpl implements PaidRecordService
{
	@Autowired
	private PaidRecordRepository paidRecordRepository;

	@Autowired
	private UserDonateRepository userDonateRepository;

	@Override
	public List<PaidRecord> getAllRecords(long id)
	{
		return paidRecordRepository.findByUserDonateIdOrderByCreateDtDesc(id);
				
	}

	@Override
	public PaidRecord addNewRecord(PaidRecord record) throws Exception
	{
		// query donation data to check unpaid money
		Optional<UserDonate> donate = 
				userDonateRepository.findById(record.getUserDonateId());
		
		//1. check donation exist
		if(!donate.isPresent()) 
			throw new Exception("User Donation with ID " + record.getUserDonateId() + "not exist!");
		else {
			int unpaid = donate.get().getTotalAmount() - donate.get().getCurrentPaid();
			if(unpaid < record.getPaid()) 
				throw new Exception("Paid exceed unpaid money.");
			else {				
				// 1. update user donate
				int curPaid = donate.get().getCurrentPaid() + record.getPaid();
				UserDonate updated = donate.get();
				updated.setCurrentPaid(curPaid);
				userDonateRepository.save(updated);
				
				// 2. add record
				PaidRecord newRecord = paidRecordRepository.save(record);
				return newRecord;
			}
		}
	}

	

}
