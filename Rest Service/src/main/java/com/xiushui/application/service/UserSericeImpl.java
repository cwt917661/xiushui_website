package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.User;
import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.repository.UserDonateRepository;
import com.xiushui.application.repository.UserRepository;

@Service
public class UserSericeImpl implements UserService
{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserDonateRepository userDonateRepository;

	@Override
	public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}

	@Override
	public List<User> getUserByName(String name)
	{
		return userRepository.findByName(name);
	}

	@Override
	public Optional<User> getUserById(long id)
	{
		return userRepository.findById(id);
	}

	@Override
	public User addNewUser(User user) throws Exception
	{
		// 1. check user exist
		Optional<User> exist = userRepository.
				findByNameAndBirthdayAndAddress
				(user.getName(), user.getBirthday(), user.getAddress());
		if(!exist.isEmpty()) 
			throw new Exception("User " + user.getName() + 
					" already existed, please change to edit mode.");
		else return userRepository.save(user);
	}

	@Override
	public User editUser(User user) throws Exception
	{
		// 1. check id exist
		Optional<User> exist = userRepository.findById(user.getId());
		if(exist.isEmpty())
			throw new Exception("User with id " + user.getId() + " does not exist.");
		else {
			// 2. check primary key unique
			Optional<User> existPK = userRepository.
					findByNameAndBirthdayAndAddress
					(user.getName(), user.getBirthday(), user.getAddress());
			if(existPK.isPresent() && existPK.get().getId() != user.getId()) 
				throw new Exception("Duplicate PK [" + user.getName() + ", "
						+ user.getBirthday() + ", " + user.getAddress() + " ]");
			else return userRepository.save(user);
			
		}
	}

	@Override
	public void deleteById(long id) throws Exception
	{
		// 1. check id exist
		Optional<User> exist = userRepository.findById(id);
		if(exist.isEmpty())
			throw new Exception("User with id " + id + " does not exist.");
		else {
			// 2. check donation record exist
			List<UserDonate> donate = userDonateRepository.findByUserId(id);
			if(!donate.isEmpty())
				throw new Exception("Please delete donation records for user "
						+ exist.get().getName() + " first.");
			
			else userRepository.delete(exist.get());
		}
	}

	@Override
	public List<String> getDistinctTypes()
	{
		List<User> users = userRepository.findDistinctTypesByTypeNotNull();
		return users.stream().map(u -> u.getType()).collect(Collectors.toList());
	}

}
