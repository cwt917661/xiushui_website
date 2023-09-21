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
	private int user_donate_id;
	
	@Column(nullable = false)
	private int paid;
	
	@Column(nullable = false)
	private int sponsor;
	
	@Column(nullable = false)
	private Timestamp create_dt;

	public int getUser_donate_id()
	{
		return user_donate_id;
	}

	public void setUser_donate_id(int user_donate_id)
	{
		this.user_donate_id = user_donate_id;
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

	public Timestamp getCreate_dt()
	{
		return create_dt;
	}

	public void setCreate_dt(Timestamp create_dt)
	{
		this.create_dt = create_dt;
	}
}
