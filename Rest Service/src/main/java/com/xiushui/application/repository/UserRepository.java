package com.xiushui.application.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xiushui.application.entity.User;


public interface UserRepository extends JpaRepository<User, Long>
{
	List<User> findByName(String name);
	
	Optional<User> findByNameAndBirthdayAndAddress(String name, String birthday, String address);
	
	List<User> findDistinctTypesByTypeNotNull();

}
