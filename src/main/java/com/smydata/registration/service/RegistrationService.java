package com.smydata.registration.service;

import com.smydata.registration.model.Registartion;

public interface RegistrationService {
	public Registartion saveUser(Registartion registration);
	public Registartion findByMobileNumber(String mobileNumber);
}
