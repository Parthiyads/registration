package com.smydata.registration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Registartion;

public interface RegistrationRepository extends JpaRepository<Registartion, Long> {
	
	public Registartion findByMobile(String mobileNumber);

}
