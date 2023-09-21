package com.xiushui.application.entity;

import java.sql.*;
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

	@Column(nullable = false)
	private Timestamp create_dt;

	@Column(nullable = false)
	private Timestamp update_dt;

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
