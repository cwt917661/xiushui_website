package com.xiushui.application.service;

import java.util.List;

import com.xiushui.application.entity.PaidRecord;

public interface PaidRecordService
{
	List<PaidRecord> getAllRecords(long userDonationId);
		
	PaidRecord addNewRecord(PaidRecord record) throws Exception;
}
