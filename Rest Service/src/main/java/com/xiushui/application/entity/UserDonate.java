package com.xiushui.application.entity;

import java.sql.*;
import java.util.Objects;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
@Table(name = "user_donate")
public class UserDonate
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private String active = "Y";
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User userInfo;
	
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
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(nullable = false)
	private Date dueDt;
	
	@Column(nullable = false)
	private int sponsor;
	
	private String remark;
	
	@CreationTimestamp
	private Timestamp createDt;
	
	@UpdateTimestamp
	private Timestamp updateDt;

	@Override
	public int hashCode()
	{
		return Objects.hash(categoryId, userInfo, year);
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj) return true;
		if (obj == null) return false;
		if (getClass() != obj.getClass()) return false;
		UserDonate other = (UserDonate) obj;
		return categoryId == other.categoryId
				&& userInfo == other.userInfo
				&& Objects.equals(year, other.year);
	}

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

	public User getUserInfo()
	{
		return userInfo;
	}

	public void setUserId(User userInfo)
	{
		this.userInfo = userInfo;
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

	public Date getDueDt()
	{
		return dueDt;
	}

	public void setDueDt(Date dueDt)
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
