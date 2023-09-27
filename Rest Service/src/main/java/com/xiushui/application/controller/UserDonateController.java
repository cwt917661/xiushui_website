package com.xiushui.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.UserDonate;
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
	
}
