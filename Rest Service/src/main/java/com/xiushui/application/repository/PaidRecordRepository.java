package com.xiushui.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xiushui.application.entity.PaidRecord;


public interface PaidRecordRepository extends JpaRepository<PaidRecord, Long>
{

}
