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
	private int user_id;
	
	@Column(nullable = false)
	private int category_id;
	
	@Column(nullable = false)
	private String year;
	
	@Column(nullable = false)
	private String payment_type;
	
	@Column(nullable = false)
	private int total_amount;
	
	@Column(nullable = false)
	private int current_paid;
	
	@Column(nullable = false)
	private Timestamp due_dt;
	
	@Column(nullable = false)
	private int sponsor;
	
	private String remark;
	
	@Column(nullable = false)
	private Timestamp create_dt;
	
	@Column(nullable = false)
	private Timestamp update_dt;

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

	public int getUser_id()
	{
		return user_id;
	}

	public void setUser_id(int user_id)
	{
		this.user_id = user_id;
	}

	public int getCategory_id()
	{
		return category_id;
	}

	public void setCategory_id(int category_id)
	{
		this.category_id = category_id;
	}

	public String getYear()
	{
		return year;
	}

	public void setYear(String year)
	{
		this.year = year;
	}

	public String getPayment_type()
	{
		return payment_type;
	}

	public void setPayment_type(String payment_type)
	{
		this.payment_type = payment_type;
	}

	public int getTotal_amount()
	{
		return total_amount;
	}

	public void setTotal_amount(int total_amount)
	{
		this.total_amount = total_amount;
	}

	public int getCurrent_paid()
	{
		return current_paid;
	}

	public void setCurrent_paid(int current_paid)
	{
		this.current_paid = current_paid;
	}

	public Timestamp getDue_dt()
	{
		return due_dt;
	}

	public void setDue_dt(Timestamp due_dt)
	{
		this.due_dt = due_dt;
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

	public Timestamp getCreate_dt()
	{
		return create_dt;
	}

	public void setCreate_dt(Timestamp create_dt)
	{
		this.create_dt = create_dt;
	}

	public Timestamp getUpdate_dt()
	{
		return update_dt;
	}

	public void setUpdate_dt(Timestamp update_dt)
	{
		this.update_dt = update_dt;
	}

}
