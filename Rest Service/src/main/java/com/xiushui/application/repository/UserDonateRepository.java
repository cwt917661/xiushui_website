package com.xiushui.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.xiushui.application.entity.UserDonate;

public interface UserDonateRepository extends JpaRepository<UserDonate, Long>
{
	@Query(value = "SELECT * FROM user_donate "
			+ "WHERE current_paid < total_amount"
			+ " ORDER BY due_dt", nativeQuery = true)
	List<UserDonate> findOverDraft();
	
	@Query(value = "SELECT * FROM user_donate WHERE"
			+ " due_dt <= NOW() AND"
			+ " due_dt >= DATE_SUB(NOW(), INTERVAL 3 MONTH)"
			+ " ORDER BY due_dt"
			, nativeQuery = true)
	List<UserDonate> findOnComing();
	
	@Query(value = "SELECT * FROM user_donate WHERE user_id = :id"
			+ " ORDER BY year desc", nativeQuery = true)
	List<UserDonate> findByUserId(long id);
}
