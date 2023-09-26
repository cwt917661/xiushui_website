package com.xiushui.application.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.xiushui.application.entity.User;
import com.xiushui.application.request.RqstGetUserByInfo;
import com.xiushui.application.service.UserService;

@RestController
@RequestMapping(value="/UserService", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController
{
	@Autowired
	private UserService userService;
	
	@GetMapping("getAllUsers")
    public ResponseEntity<List<User>> getAllUsers()
	{
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
	
	@PostMapping("getUsersByInfo")
    public ResponseEntity<List<User>> getUsersByInfo(@RequestBody RqstGetUserByInfo userInfo)
	{
        List<User> users = userService.getUserByInfo(userInfo.getName());
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
	
	@PostMapping("getUsersById")
	public ResponseEntity<Optional<User>> getUsersById(@RequestBody RqstGetUserByInfo userInfo)
	{
        Optional<User> user = userService.getUserById(userInfo.getId());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
