package com.xiushui.application.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "paid_record")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(setterPrefix = "set", toBuilder = true)
public class PaidRecord
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable = false)
	private long userDonateId;
	
	@Column(nullable = false)
	private int paid;
	
	@Column(nullable = false)
	private long sponsor;
	
	@CreationTimestamp
	@Column(nullable = false, updatable = false, columnDefinition="timestamp default current_timestamp")
	private Timestamp createDt;
}
