package com.xiushui.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xiushui.application.entity.User;
import com.xiushui.application.service.UserService;

@RestController
@RequestMapping("RestService/User")
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
}
