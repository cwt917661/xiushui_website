package com.xiushui.application.controller;

import java.util.List;
import java.util.Optional;

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

import com.xiushui.application.entity.User;
import com.xiushui.application.request.RqstGetUserByInfo;
import com.xiushui.application.response.RespRestResponse;
import com.xiushui.application.service.UserService;

@RestController
@RequestMapping(value="/UserService", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController
{
	@Autowired
	private UserService userService;
	
	@GetMapping("GetAllTypes")
    public ResponseEntity<RespRestResponse<Object>> getAllTypes()
	{
		try {
	        List<String> users = userService.getDistinctTypes();		
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(users);
			response.setMessage("Get all types successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@GetMapping("GetAllUsers")
    public ResponseEntity<RespRestResponse<Object>> getAllUsers()
	{
		try {
	        List<User> users = userService.getAllUsers();			
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(users);
			response.setMessage("Get all users successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("GetUsersByName")
    public ResponseEntity<RespRestResponse<Object>> getUsersByName(@RequestBody RqstGetUserByInfo userInfo)
	{
		try {
	        List<User> users = userService.getUserByName(userInfo.getName());
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(users);
			response.setMessage("Get users by user name successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("GetUserById")
	public ResponseEntity<RespRestResponse<Object>> getUsersById(@RequestBody RqstGetUserByInfo userInfo)
	{
		try {
	        Optional<User> user = userService.getUserById(userInfo.getId());
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			
	        if(user.isEmpty()) {
	        	response.setMessage("User with id " + userInfo.getId() + " not exist.");
	        	return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	        else {
		        response.setRespData(user);
				response.setMessage("Get users by id successfully.");
		        return new ResponseEntity<>(response, HttpStatus.OK);				        	
	        }
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("AddNewUser")
	public ResponseEntity<RespRestResponse<Object>> addNewUser(@RequestBody User userInfo)
	{
		try {
	        User user = userService.addNewUser(userInfo);
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(user);
			response.setMessage("Add new user successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@PostMapping("EditUser")
	public ResponseEntity<RespRestResponse<Object>> editUser(@RequestBody User userInfo)
	{
		try {
	        User user = userService.editUser(userInfo);
			RespRestResponse<Object> response
							= new RespRestResponse<Object>();
			response.setRespData(user);
			response.setMessage("Edit user information successfully.");
	        return new ResponseEntity<>(response, HttpStatus.OK);			
		} catch(Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
	
	@DeleteMapping("DeleteById")
	public ResponseEntity<RespRestResponse<Object>> deleteById(@RequestBody User user)
	{
		try {
			userService.deleteById(user.getId());
			RespRestResponse<Object> response
					= new RespRestResponse<Object>();
			response.setMessage("Delete user successfully.");
			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			RespRestResponse<Object> response = new RespRestResponse<Object>();
			response.setMessage(e.getMessage());
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
    }
}
