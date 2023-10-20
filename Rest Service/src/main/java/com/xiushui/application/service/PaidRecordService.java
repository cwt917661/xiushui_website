package com.xiushui.application.service;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.response.RespGetPaidRecordsWithDonateInfo;
import com.xiushui.application.response.RespRemainingPayment;

public interface PaidRecordService
{
	RespGetPaidRecordsWithDonateInfo getRecordsByDonateId(long userDonationId) throws Exception;
		
	RespRemainingPayment addNewRecord(PaidRecord record) throws Exception;
	
	int deleteById(long id) throws Exception;
}
