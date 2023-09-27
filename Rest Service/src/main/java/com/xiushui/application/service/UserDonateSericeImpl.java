package com.xiushui.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.repository.UserDonateRepository;

@Service
public class UserDonateSericeImpl implements UserDonateService
{
	@Autowired
	private UserDonateRepository userDonateRepository;

	@Override
	public List<UserDonate> getAllInformation()
	{
		return userDonateRepository.findAll(Sort.by(Sort.Direction.ASC, "dueDt"));
	}
}
