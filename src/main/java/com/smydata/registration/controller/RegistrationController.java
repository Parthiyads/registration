package com.smydata.registration.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.smydata.registration.model.Registartion;
import com.smydata.registration.service.RegistrationService;

@RestController
@RequestMapping("/api")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;
	
	private static final String API_URL = "http://2factor.in/API/V1/7645e41d-242b-11e8-a895-0200cd936042/SMS/%s/%s";

	@PostMapping("/saveUser")
	public Registartion saveUser(@RequestBody Registartion registration) {
		System.out.println("mobile"+registration.getMobile());
		return registrationService.saveUser(registration);
	}
	
	
	
	@PostMapping("/loginUser")
	public boolean loginUser(@RequestBody Registartion registration,HttpSession session) {
		System.out.println("mobile123"+registration.getMobile());
		if(session!=null){
			session.removeAttribute("mobileNo");
		}
		registration= registrationService.findByMobileNumber(registration.getMobile());
		if(registration==null){
			return false;
		}
		return true;
	}
	
	@GetMapping("/sendOtp/{mobile}")
	public int sendOtp(@PathVariable("mobile") String mobile,HttpSession session){
		RestTemplate restTemplate = new RestTemplate();
		int otp = (int) Math.round(Math.random()*100000);
		session.setAttribute("mobileNo", mobile);
		String url = String.format(API_URL, mobile,otp);
		System.out.println("====>>>>>in sendOtp ============>>>>>>>>>>"+url);
		try{
			ResponseEntity<String> response =restTemplate.postForEntity(url,null,String.class);
			
			System.out.println("response====>"+response.getStatusCode());
		}
		
		catch(Exception e){
			System.out.println("Exception in sendOtp====>"+e.toString());
//			e.printStackTrace();
		}
		return otp;
		
	}
	
	@GetMapping("/resetPwd/{pwd}")
	public void resetPassword(@PathVariable("pwd") String pwd,HttpSession session) {
		String mobileNo = "";
		if(session!=null){
			mobileNo = (String) session.getAttribute("mobileNo");
		}
		System.out.println("=====>>>ResetPassword====>"+pwd+" mobno:: "+mobileNo);
		Registartion registration= registrationService.findByMobileNumber(mobileNo);
		
		if(registration!=null){
			registration.setPassword(pwd);
			registrationService.saveUser(registration);
		}
		
	}
	

}
