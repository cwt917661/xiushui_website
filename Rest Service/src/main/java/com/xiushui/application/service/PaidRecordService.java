package com.xiushui.application.service;

import java.util.List;

import com.xiushui.application.entity.PaidRecord;

public interface PaidRecordService
{
	List<PaidRecord> getAllRecords();
		
	PaidRecord addNewRecord(PaidRecord category) throws Exception;
}
