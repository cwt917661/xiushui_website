package com.xiushui.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xiushui.application.entity.PaidRecord;


public interface PaidRecordRepository extends JpaRepository<PaidRecord, Long>
{
	List<PaidRecord> findByUserDonateIdOrderByCreateDtDesc(long id);
}
