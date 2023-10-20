package com.xiushui.application.response;

import java.util.List;

import com.xiushui.application.entity.PaidRecord;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RespGetPaidRecordsWithDonateInfo
{
	private RespGetUserDonateInfo donateInfo;
	
	private List<PaidRecord> records;
}
