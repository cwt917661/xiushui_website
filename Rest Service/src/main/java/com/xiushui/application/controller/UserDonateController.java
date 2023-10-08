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
import com.xiushui.application.request.RqstGetUserByInfo;
import com.xiushui.application.response.RespGetAllUserDonateInfo;
import com.xiushui.application.response.ResponseMapper;
import com.xiushui.application.service.UserDonateService;

@RestController
@RequestMapping(value="/UserDonateService", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserDonateController
{
	@Autowired
	private UserDonateService userDonateService;
	
	@GetMapping("GetAllInformation")
    public ResponseEntity<List<RespGetAllUserDonateInfo>> getAllInformation()
	{
        List<UserDonate> info = userDonateService.getAllInformation();
        return new ResponseEntity<>(
        		ResponseMapper.INSTANCE.convertList(info),
        		HttpStatus.OK);
    }
	
	@GetMapping("GetOverDraft")
    public ResponseEntity<List<RespGetAllUserDonateInfo>> getOverDraft()
	{
        List<UserDonate> info = userDonateService.getOverDraft();
        return new ResponseEntity<>(
        		ResponseMapper.INSTANCE.convertList(info),
        		HttpStatus.OK);
    }
	
	@GetMapping("GetOnComing")
    public ResponseEntity<List<RespGetAllUserDonateInfo>> getOComing()
	{
        List<UserDonate> info = userDonateService.getOnComing();
        return new ResponseEntity<>(
        		ResponseMapper.INSTANCE.convertList(info),
        		HttpStatus.OK);
    }
	
	@PostMapping("GetByUserId")
	public ResponseEntity<List<RespGetAllUserDonateInfo>> GetByUserId(@RequestBody RqstGetUserByInfo userInfo)
	{
		List<UserDonate> info = userDonateService.getByUserId(userInfo.getId());
        return new ResponseEntity<>(
        		ResponseMapper.INSTANCE.convertList(info),
        		HttpStatus.OK);
    }
}
