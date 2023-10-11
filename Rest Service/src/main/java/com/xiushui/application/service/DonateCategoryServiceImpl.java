package com.xiushui.application.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.xiushui.application.entity.DonateCategory;
import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.repository.DonateCategoryRepository;
import com.xiushui.application.repository.UserDonateRepository;

@Service
public class DonateCategoryServiceImpl implements DonateCategoryService
{
	@Autowired
	private DonateCategoryRepository donateCategoryRepository;

	@Autowired
	private UserDonateRepository userDonateRepository;

	@Override
	public List<DonateCategory> getAllCategories()
	{
		return donateCategoryRepository.findAll();
		
	}

	@Override
	public DonateCategory addNewCategory(String category) throws Exception
	{
		// 1. check exist
		DonateCategory catgObj = new DonateCategory();
		catgObj.setName(category);
		List<DonateCategory> result = 
				donateCategoryRepository.findAll(Example.of(catgObj));
		
		if(!result.isEmpty()) throw new Exception("資料已存在!!");
		else return donateCategoryRepository.save(catgObj);
	}

	@Override
	public void deleteById(long id) throws Exception
	{
		// 1. check donation data exist
		List<UserDonate> donationData = userDonateRepository.findByCategoryId(id);
		
		if(!donationData.isEmpty()) 
			throw new Exception("已有資料使用此類別，請確認!!"); 
		else donateCategoryRepository.deleteById(id);
	}

}
