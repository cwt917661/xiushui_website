package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;

import com.xiushui.application.entity.User;

public interface UserService
{
	List<User> getAllUsers();
	
	List<User> getUserByName(String name);
	
	Optional<User> getUserById(long id);
}
