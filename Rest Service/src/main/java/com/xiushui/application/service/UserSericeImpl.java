package com.xiushui.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.User;
import com.xiushui.application.repository.UserRepository;

@Service
public class UserSericeImpl implements UserService
{
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}

	@Override
	public List<User> getUserByInfo(String name)
	{
		return userRepository.findByName(name);
	}

}
