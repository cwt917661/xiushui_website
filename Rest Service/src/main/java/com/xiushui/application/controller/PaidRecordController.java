package com.xiushui.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.PaidRecord;
import com.xiushui.application.request.RqstGetPaidRecordByDonateId;
import com.xiushui.application.response.RespGetPaidRecordsWithDonateInfo;
import com.xiushui.application.response.RespRemainingPayment;
import com.xiushui.application.response.RespRestResponse;
import com.xiushui.application.service.PaidRecordService;

@RestController
@RequestMapping(value="/PaidRecordService", produces = MediaType.APPLICATION_JSON_VALUE)
public class PaidRecordController
{
	@Autowired
	private PaidRecordService paidRecordService;
		
	@PostMapping("GetRecordsByDonationId")
    public ResponseEntity<RespRestResponse<Object>> getRecordsByDonationId
    	(@RequestBody RqstGetPaidRecordByDonateId request)
	{
		try {
			RespGetPaidRecordsWithDonateInfo records = 
					paidRecordService.getRecordsByDonateId(request.getUserDonateId());
			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(records);
			response.setMessage("Get all paid record successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("AddNewRecord")
    public ResponseEntity<RespRestResponse<Object>> addNewRecord(@RequestBody PaidRecord record)
	{
		try {
			RespRemainingPayment result = paidRecordService.addNewRecord(record);
			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(result);
			response.setMessage("Add new paid record successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@DeleteMapping("DeleteById")
	public ResponseEntity<RespRestResponse<Object>> deleteById(@RequestBody PaidRecord record)
	{
		try {
			int unpaid = paidRecordService.deleteById(record.getId());
			RespRestResponse<Object> response
					= new RespRestResponse<Object>();
			response.setRespData(unpaid);
			response.setMessage("Delete record successfully.");
			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }

}
