package com.smydata.registration.controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.client.RestTemplate;

import com.smydata.registration.model.Registartion;
import com.smydata.registration.service.RegistrationService;

@RestController
@RequestMapping("/api")
@SessionAttributes("registration")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;
	
	List<Registartion> registartion;
	
	private static final String API_URL = "http://2factor.in/API/V1/7645e41d-242b-11e8-a895-0200cd936042/SMS/%s/%s";

	@PostMapping("/saveUser/{userFlag}") //userFlag is to identify registration/add/edit
	public Registartion saveUser(@PathVariable("userFlag") String userFlag,@RequestBody Registartion registration,HttpSession session) {
		System.out.println("saveUser mobile: "+registration.getMobile()+" userFlag: "+userFlag);
		Registartion sessReg = null; 
		if(session!=null){
			sessReg = (Registartion) session.getAttribute("registration");
		}
		long regId = (long) Math.round(Math.random()*100000);
		if("registration".equalsIgnoreCase(userFlag)){
			registration.setOwnerRegId(regId);	
		} else if("add".equalsIgnoreCase(userFlag)){
			registration.setOwnerRegId(sessReg.getOwnerRegId());
			registration.setMobile(sessReg.getMobile());
			registration.setOwnerName(sessReg.getOwnerName());
		} else if("edit".equalsIgnoreCase(userFlag)){
//			registration.setOwnerRegId(sessReg.getOwnerRegId());
		}
		
		return registrationService.saveUser(registration);
	}
	
	@PostMapping("/loginUser")
	public boolean loginUser(@RequestBody Registartion registration,HttpSession session) {
		System.out.println("loginUser mobile123"+registration.getMobile());
		if(session!=null){
			session.removeAttribute("registration");
		}
		registartion = new ArrayList<Registartion>();
		
		registartion= registrationService.findByMobileNumber(registration.getMobile());
		
		/*for(Registartion reg :registartion){
			if(registration.getMobile().equalsIgnoreCase(reg.getMobile())){
				registration = reg;
			
				break;
			}
		}*/
		
		if(registartion==null || registartion.isEmpty()){
			return false;
		}
		session.setAttribute("registration", registartion.get(0));
		return true;
	}
	
	@GetMapping("/viewMyBusiness")
	public List<Registartion> getBusinessDetails(HttpSession session){
		Registartion registartion = null; 
		if(session!=null){
			registartion = (Registartion) session.getAttribute("registration");
		}
		System.out.println("getBusinessDetails mobile"+registartion.getMobile());
		return registrationService.findByMobileNumber(registartion.getMobile());
	}
	
	@GetMapping("/sendOtp/{mobile}")
	public int sendOtp(@PathVariable("mobile") String mobile,HttpSession session){
		RestTemplate restTemplate = new RestTemplate();
		int otp = (int) Math.round(Math.random()*100000);
		String url = String.format(API_URL, mobile,otp);
		System.out.println("====>>>>>in sendOtp ============>>>>>>>>>>"+url);
		try{
			ResponseEntity<String> response =restTemplate.postForEntity(url,null,String.class);
			
			System.out.println("response====>"+response.getStatusCode());
		}
		
		catch(Exception e){
			System.out.println("Exception occured in sendOtp====>"+e.toString());
//			e.printStackTrace();
		}
		return otp;
		
	}
	
	@GetMapping("/resetPwd/{pwd}")
	public void resetPassword(@PathVariable("pwd") String pwd,HttpSession session) {
		Registartion registration = null; 
		if(session!=null){
			registration = (Registartion) session.getAttribute("registration");
		}
			registration.setPassword(pwd);
			registrationService.saveUser(registration);
		
	}
	

}
