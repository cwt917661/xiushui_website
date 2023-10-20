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
@Table(name = "donate_category")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(setterPrefix = "set", toBuilder = true)
@EqualsAndHashCode(of = {"name"})
public class DonateCategory
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(nullable = false)
	private String name;

	@CreationTimestamp
	@Column(nullable = false, updatable = false, columnDefinition="timestamp default current_timestamp")
	private Timestamp createDt;

	@UpdateTimestamp
	@Column(nullable = false, updatable = false, columnDefinition="timestamp default current_timestamp on update current_timestamp")
	private Timestamp updateDt;
}
