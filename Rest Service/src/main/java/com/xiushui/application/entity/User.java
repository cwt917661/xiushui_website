package com.xiushui.application.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(setterPrefix = "set", toBuilder = true)
@EqualsAndHashCode(of = {"name", "address", "birthday"})
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String account;

	private String passwd;

	@Column(nullable = false)
	@Builder.Default
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
}
