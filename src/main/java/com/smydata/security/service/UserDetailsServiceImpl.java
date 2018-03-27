package com.smydata.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.smydata.registration.model.Registartion;
import com.smydata.registration.repository.RegistrationRepository;
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	RegistrationRepository registrationRepository;
	
	List<Registartion> registration;
	
	@Override
	public UserDetails loadUserByUsername(String mobile)
			throws UsernameNotFoundException {
		System.out.println("mobile:::"+mobile);
		registration=registrationRepository.findByMobile(mobile);
		 UserBuilder builder = null;
		    if (registration != null && !registration.isEmpty()) {
		    	Registartion reg = registration.get(0);
		    	System.out.println("password:: "+reg.getPassword());
		      builder = org.springframework.security.core.userdetails.User.withUsername(mobile);
		      //builder.password(new BCryptPasswordEncoder().encode(registration.getPassword()));
		      builder.password(reg.getPassword());
		    } else {
		      throw new UsernameNotFoundException("User not found.");
		    }

		    return builder.build();
	}

}
