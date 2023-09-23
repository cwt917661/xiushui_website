package com.xiushui.application.entity;

import java.sql.*;
import java.util.Objects;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "donate_category")
public class DonateCategory
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false)
	private String name;

	@CreationTimestamp
	private Timestamp createDt;

	@UpdateTimestamp
	private Timestamp updateDt;

	@Override
	public int hashCode()
	{
		return Objects.hash(name);
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj) return true;
		if (obj == null) return false;
		if (getClass() != obj.getClass()) return false;
		DonateCategory other = (DonateCategory) obj;
		return Objects.equals(name, other.name);
	}

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
