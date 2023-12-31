package com.xiushui.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.DonateCategory;
import com.xiushui.application.mapper.DonateCategoryResponseMapper;
import com.xiushui.application.request.RqstModifyDonateCategory;
import com.xiushui.application.response.RespRestResponse;
import com.xiushui.application.service.DonateCategoryService;

@RestController
@RequestMapping(value="/DonateCategoryService", produces = MediaType.APPLICATION_JSON_VALUE)
public class DonateCategoryController
{
	@Autowired
	private DonateCategoryService donateCategoryService;
	
	@GetMapping("GetAllCategories")
    public ResponseEntity<RespRestResponse<Object>> getAllCategories()
	{
		try {
			List<DonateCategory> catgories = donateCategoryService.getAllCategories();
			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(catgories);
			response.setMessage("Get all categories successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("AddNewCategory")
    public ResponseEntity<RespRestResponse<Object>> addNewCategory(@RequestBody RqstModifyDonateCategory category)
	{
		try {
			DonateCategory result = donateCategoryService.addNewCategory(category.getName());
			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(DonateCategoryResponseMapper.INSTANCE.convert(result));
			response.setMessage("Add new category successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	
	@DeleteMapping("DeleteById")
	public ResponseEntity<RespRestResponse<String>> deleteById(@RequestBody RqstModifyDonateCategory category)
	{
		try {
			donateCategoryService.deleteById(category.getId());
			RespRestResponse<String> response
					= new RespRestResponse<String>();
			response.setMessage("Delete category successfully.");
			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			RespRestResponse<String> response = new RespRestResponse<String>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

}
