package com.xiushui.application.response;

import com.xiushui.application.entity.PaidRecord;

import lombok.Data;

@Data
public class RespRemainingPayment
{
	private int remaining;
	private PaidRecord record;
}
