package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;

import com.xiushui.application.entity.User;

public interface UserService
{
	List<User> getAllUsers();
	
	List<User> getUserByName(String name);
	
	Optional<User> getUserById(long id);
	
	User addNewUser(User user) throws Exception;
	
	User editUser(User user) throws Exception;
	
	void deleteById(long id) throws Exception;
	
	List<String> getDistinctTypes();
}
