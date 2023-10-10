package com.xiushui.application.response;

import java.sql.Date;

import lombok.Builder;
import lombok.Data;

@Data
@Builder(setterPrefix = "set", toBuilder = true)
public class RespGetUserDonateInfo
{
	private int id;
	
	private int userId;
	private String userName;
	private String userType;
	private String userPhone;
	private String userEmail;
	private String userAddress;

	private String category;
	private String year;
	private String paymentType;
	private int totalAmount;
	private int currentPaid;
	private Date dueDt;
	private int sponsor;	
	private String remark;
}
