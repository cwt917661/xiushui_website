package com.xiushui.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.UserDonate;
import com.xiushui.application.mapper.UserDonateResponseMapper;
import com.xiushui.application.request.RqstGetUserByInfo;
import com.xiushui.application.response.RespRestResponse;
import com.xiushui.application.service.UserDonateService;

@RestController
@RequestMapping(value="/UserDonateService", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserDonateController
{
	@Autowired
	private UserDonateService userDonateService;
	
	@GetMapping("GetAllInformation")
    public ResponseEntity<RespRestResponse<Object>> getAllInformation()
	{
		try {
	        List<UserDonate> info = userDonateService.getAllInformation();
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setRespData(UserDonateResponseMapper.INSTANCE.convertList(info));
			response.setMessage("Get donate information successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@GetMapping("GetOverDraft")
    public ResponseEntity<RespRestResponse<Object>> getOverDraft()
	{
		try {
	        List<UserDonate> info = userDonateService.getOverDraft();
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setRespData(UserDonateResponseMapper.INSTANCE.convertList(info));
			response.setMessage("Get over draft donate information successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@GetMapping("GetOnComing")
    public ResponseEntity<RespRestResponse<Object>> getOComing()
	{
		try {
	        List<UserDonate> info = userDonateService.getOnComing();
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setRespData(UserDonateResponseMapper.INSTANCE.convertList(info));
			response.setMessage("Get on coming donate information successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("GetByUserId")
	public ResponseEntity<RespRestResponse<Object>> getByUserId(@RequestBody RqstGetUserByInfo userInfo)
	{
		try {
			List<UserDonate> info = userDonateService.getByUserId(userInfo.getId());
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setRespData(UserDonateResponseMapper.INSTANCE.convertList(info));
			response.setMessage("Get donate information by user id successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
}
