package com.xiushui.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xiushui.application.entity.User;


public interface UserRepository extends JpaRepository<User, Long>
{

}
