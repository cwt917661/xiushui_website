package com.xiushui.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.response.RespRestResponse;
import com.xiushui.application.service.PaidRecordService;

@RestController
@RequestMapping(value="/PaidRecordService", produces = MediaType.APPLICATION_JSON_VALUE)
public class PaidRecordController
{
	@Autowired
	private PaidRecordService paidRecordService;
	
	@GetMapping("GetAllRecords")
    public ResponseEntity<RespRestResponse<Object>> getAllRecords()
	{
		try {
			List<PaidRecord> records = paidRecordService.getAllRecords();
			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(records);
			response.setErrMsg("Get all paid record successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setErrMsg(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
//	@PostMapping("AddNewCategory")
//    public ResponseEntity<RespRestResponse<Object>> AddNewCategory(@RequestBody RqstModifyDonateCategory category)
//	{
//		try {
//			DonateCategory result = donateCategoryService.addNewCategory(category.getName());
//			
//			RespRestResponse<Object> response
//							= new RespRestResponse<Object>();
//			response.setRespData(DonateCategoryResponseMapper.INSTANCE.convert(result));
//			response.setErrMsg("Add new category successfully.");
//	        return new ResponseEntity<>(response, HttpStatus.OK);			
//		} catch(Exception e) {
//			RespRestResponse<Object> response = new RespRestResponse<Object>();
//			response.setErrMsg(e.getMessage());
//			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//    }

}
