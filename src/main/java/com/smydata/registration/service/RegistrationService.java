package com.smydata.registration.service;

import java.util.List;

import com.smydata.registration.model.Registartion;

public interface RegistrationService {
	public Registartion saveUser(Registartion registration);
	public List<Registartion> findByMobileNumber(String mobileNumber);
}
