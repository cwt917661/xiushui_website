package com.xiushui.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xiushui.application.entity.DonateCategory;


public interface DonateCategoryRepository extends JpaRepository<DonateCategory, Long>
{

}
