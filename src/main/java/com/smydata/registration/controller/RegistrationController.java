package com.smydata.registration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smydata.registration.model.Registartion;
import com.smydata.registration.service.RegistrationService;

@RestController
@RequestMapping("/api")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;

	@PostMapping("/saveUser")
	public Registartion saveUser(@RequestBody Registartion registration) {
		System.out.println("mobile"+registration.getMobile());
		return registrationService.saveUser(registration);
	}
	
	
	
	@PostMapping("/loginUser")
	public boolean loginUser(@RequestBody Registartion registration) {
		System.out.println("mobile123"+registration.getMobile());
		registration= registrationService.findByMobileNumber(registration.getMobile());
		if(registration==null){
			return false;
		}
		return true;
	}
	

}
