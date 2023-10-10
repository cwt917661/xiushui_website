package com.xiushui.application.service;

import java.util.List;

import com.xiushui.application.entity.DonateCategory;

public interface DonateCategoryService
{
	List<DonateCategory> getAllCategory();
	
	DonateCategory addNewCategory(String category) throws Exception;
	
	void deleteById(long id) throws Exception;
}
