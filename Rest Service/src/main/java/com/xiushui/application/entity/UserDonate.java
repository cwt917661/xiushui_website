package com.xiushui.application.entity;

import java.sql.*;
import jakarta.persistence.*;

@Entity
@Table(name = "user_denote")
public class UserDonate
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private String active = "Y";
	
	@Column(nullable = false)
	private int userId;
	
	@Column(nullable = false)
	private int categoryId;
	
	@Column(nullable = false)
	private String year;
	
	@Column(nullable = false)
	private String paymentType;
	
	@Column(nullable = false)
	private int totalAmount;
	
	@Column(nullable = false)
	private int currentPaid;
	
	@Column(nullable = false)
	private Timestamp dueDt;
	
	@Column(nullable = false)
	private int sponsor;
	
	private String remark;
	
	@Column(nullable = false)
	private Timestamp createDt;
	
	@Column(nullable = false)
	private Timestamp updateDt;

	public boolean isActive()
	{
		if(active.equals("Y")) return true;
		else return false;
	}

	public void setActive(boolean active)
	{
		if(active) this.active = "Y";
		else this.active = "N";
	}

	public int getUserId()
	{
		return userId;
	}

	public void setUserId(int userId)
	{
		this.userId = userId;
	}

	public int getCategoryId()
	{
		return categoryId;
	}

	public void setCategoryId(int categoryId)
	{
		this.categoryId = categoryId;
	}

	public String getYear()
	{
		return year;
	}

	public void setYear(String year)
	{
		this.year = year;
	}

	public String getPaymentType()
	{
		return paymentType;
	}

	public void setPaymentType(String paymentType)
	{
		this.paymentType = paymentType;
	}

	public int getTotalAmount()
	{
		return totalAmount;
	}

	public void setTotalAmount(int totalAmount)
	{
		this.totalAmount = totalAmount;
	}

	public int getCurrentPaid()
	{
		return currentPaid;
	}

	public void setCurrentPaid(int currentPaid)
	{
		this.currentPaid = currentPaid;
	}

	public Timestamp getDueDt()
	{
		return dueDt;
	}

	public void setDueDt(Timestamp dueDt)
	{
		this.dueDt = dueDt;
	}

	public int getSponsor()
	{
		return sponsor;
	}

	public void setSponsor(int sponsor)
	{
		this.sponsor = sponsor;
	}

	public String getRemark()
	{
		return remark;
	}

	public void setRemark(String remark)
	{
		this.remark = remark;
	}

	public Timestamp getCreateDt()
	{
		return createDt;
	}

	public void setCreateDt(Timestamp createDt)
	{
		this.createDt = createDt;
	}

	public Timestamp getUpdateDt()
	{
		return updateDt;
	}

	public void setUpdateDt(Timestamp updateDt)
	{
		this.updateDt = updateDt;
	}

}
