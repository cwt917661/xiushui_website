package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;

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
		return userDonateRepository.findAll(Sort.by(Sort.Direction.DESC, "dueDt"));
	}

	@Override
	public List<UserDonate> getOverDraft()
	{
		return userDonateRepository.findOverDraft();
	}

	@Override
	public List<UserDonate> getOnComing()
	{
		return userDonateRepository.findOnComing();
	}

	@Override
	public List<UserDonate> getByUserId(long id)
	{
		return userDonateRepository.findByUserId(id);
	}

	@Override
	public Optional<UserDonate> getById(long id)
	{
		return userDonateRepository.findById(id);
	}
}
