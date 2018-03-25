package com.smydata.registration.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smydata.registration.model.Registartion;

public interface RegistrationRepository extends JpaRepository<Registartion, Long> {
	
	public List<Registartion> findByMobile(String mobileNumber);
//	public List<Registartion> saveByOwnerRegId(String mobileNumber);

}
