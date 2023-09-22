package com.xiushui.application.service;

import java.util.List;

import com.xiushui.application.entity.User;

public interface UserService
{
	List<User> getAllUsers();
	
	List<User> getUserByInfo(String name);
}
