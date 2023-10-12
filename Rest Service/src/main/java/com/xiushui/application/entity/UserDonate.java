package com.xiushui.application.entity;

import java.sql.Date;
import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "user_donate")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder(setterPrefix = "set", toBuilder = true)
@EqualsAndHashCode(of = {"category", "userInfo", "year"})
public class UserDonate
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(nullable = false)
	@Builder.Default
	private String active = "Y";
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User userInfo;
	
	@ManyToOne
	@JoinColumn(name="category_id")
	private DonateCategory category;
	
	@Column(nullable = false)
	private String year;
	
	@Column(nullable = false)
	private String paymentType;
	
	@Column(nullable = false)
	private int totalAmount;
	
	@Column(nullable = false)
	private int currentPaid;
	
	@Column(nullable = false)
	private Date dueDt;
	
	@Column(nullable = false)
	private int sponsor;
	
	private String remark;
	
	@CreationTimestamp
	private Timestamp createDt;
	
	@UpdateTimestamp
	private Timestamp updateDt;
	
}
