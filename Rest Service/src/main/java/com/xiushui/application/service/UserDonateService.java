package com.xiushui.application.service;

import java.util.List;
import java.util.Optional;

import com.xiushui.application.entity.UserDonate;

public interface UserDonateService
{
	List<UserDonate> getAllInformation();
	
	List<UserDonate> getOverDraft();
	
	List<UserDonate> getOnComing();
	
	List<UserDonate> getByUserId(long id);
	
	Optional<UserDonate> getById(long id);
}
