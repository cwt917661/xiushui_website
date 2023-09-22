package com.xiushui.application.entity;

import java.sql.*;
import jakarta.persistence.*;

@Entity
@Table(name = "paid_record")
public class PaidRecord
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(nullable = false)
	private int userDonateId;
	
	@Column(nullable = false)
	private int paid;
	
	@Column(nullable = false)
	private int sponsor;
	
	@Column(nullable = false)
	private Timestamp createDt;

	public int getUserDonateId()
	{
		return userDonateId;
	}

	public void setUserDonateId(int userDonateId)
	{
		this.userDonateId = userDonateId;
	}

	public int getPaid()
	{
		return paid;
	}

	public void setPaid(int paid)
	{
		this.paid = paid;
	}

	public int getSponsor()
	{
		return sponsor;
	}

	public void setSponsor(int sponsor)
	{
		this.sponsor = sponsor;
	}

	public Timestamp getCreateDt()
	{
		return createDt;
	}

	public void setCreateDt(Timestamp createDt)
	{
		this.createDt = createDt;
	}
}
