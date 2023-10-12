package com.xiushui.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.request.RqstGetPaidRecordByDonateId;
import com.xiushui.application.response.RespRestResponse;
import com.xiushui.application.service.PaidRecordService;

@RestController
@RequestMapping(value="/PaidRecordService", produces = MediaType.APPLICATION_JSON_VALUE)
public class PaidRecordController
{
	@Autowired
	private PaidRecordService paidRecordService;
	
	@PostMapping("GetAllRecords")
    public ResponseEntity<RespRestResponse<Object>> getAllRecords
    	(@RequestBody RqstGetPaidRecordByDonateId request)
	{
		try {
			List<PaidRecord> records = 
					paidRecordService.getAllRecords(request.getUserDonateId());
			
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
	
	@PostMapping("AddNewRecord")
    public ResponseEntity<RespRestResponse<Object>> addNewRecord(@RequestBody PaidRecord record)
	{
		try {
			PaidRecord result = paidRecordService.addNewRecord(record);
			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(result);
			response.setErrMsg("Add new paid record successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setErrMsg(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

}
