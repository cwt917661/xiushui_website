package com.xiushui.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.repository.PaidRecordRepository;

@Service
public class PaidRecordServiceImpl implements PaidRecordService
{
	@Autowired
	private PaidRecordRepository paidRecordRepository;

	@Override
	public List<PaidRecord> getAllRecords()
	{
		return paidRecordRepository.findAll();
	}

	@Override
	public PaidRecord addNewRecord(PaidRecord category) throws Exception
	{
		// TODO Auto-generated method stub
		return null;
	}

	

}
