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
	private Timestamp createDt;

	@Column(nullable = false)
	private Timestamp updateDt;

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
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
