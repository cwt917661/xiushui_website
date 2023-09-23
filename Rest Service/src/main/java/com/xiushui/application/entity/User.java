package com.xiushui.application.entity;

import java.sql.*;
import java.util.Objects;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String account;

	private String passwd;

	@Column(nullable = false)
	private int privilege = 0;

	@Column(nullable = false)
	private String name;

	private String type;

	@Column(nullable = false)
	private String birthday;

	private String email;

	private String phone;

	private String address;

	@CreationTimestamp
	private Timestamp createDt;

	@UpdateTimestamp
	private Timestamp updateDt;

	@Override
	public int hashCode()
	{
		return Objects.hash(address, birthday, name);
	}

	@Override
	public boolean equals(Object obj)
	{
		if (this == obj) return true;
		if (obj == null) return false;
		if (getClass() != obj.getClass()) return false;
		User other = (User) obj;
		return Objects.equals(address, other.address)
				&& Objects.equals(birthday, other.birthday)
				&& Objects.equals(name, other.name);
	}

	public int getId()
	{
		return id;
	}

	public String getAccount()
	{
		return account;
	}

	public void setAccount(String account)
	{
		this.account = account;
	}

	public String getPasswd()
	{
		return passwd;
	}

	public void setPasswd(String passwd)
	{
		this.passwd = passwd;
	}

	public int getPrivilege() {
		return privilege;
	}

	public void setPrivilege(int privilege)
	{
		this.privilege = privilege;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
	}

	public String getBirthday()
	{
		return birthday;
	}

	public void setBirthday(String birthday)
	{
		this.birthday = birthday;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPhone()
	{
		return phone;
	}

	public void setPhone(String phone)
	{
		this.phone = phone;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
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
