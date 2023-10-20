package com.xiushui.application.response;

import java.sql.Date;

import lombok.Data;

@Data
public class RespGetUserDonateInfo
{
	private int id;
	
	private int userId;
	private String userName;
	private String userType;

	private String category;
	private String year;
	private String paymentType;
	private int totalAmount;
	private int unpaid;
	private Date dueDt;
	private int sponsor;	
	private String remark;
}
