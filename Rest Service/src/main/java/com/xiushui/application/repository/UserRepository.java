package com.xiushui.application.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.xiushui.application.entity.User;


public interface UserRepository extends JpaRepository<User, Long>
{
	@Query(value = "SELECT * FROM User u where u.name = :name", nativeQuery=true)
	List<User> findByName(@Param("name") String name);
}
