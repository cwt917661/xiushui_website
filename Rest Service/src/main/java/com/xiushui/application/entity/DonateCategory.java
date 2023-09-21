package com.xiushui.application.entity;

import java.sql.*;
import jakarta.persistence.*;

@Entity
@Table(name = "denote_category")
public class DonateCategory
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	private Timestamp create_dt;

	@Column(nullable = false)
	private Timestamp update_dt;

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
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
