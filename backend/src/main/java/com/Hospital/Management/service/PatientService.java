package com.Hospital.Management.service;

import java.util.List;

import com.Hospital.Management.entity.Patient;

public interface PatientService {
	
	Patient addPatient(Patient patient);
	List<Patient> getAllPatients();
	Patient getPatientById(Long id);
	Patient updatePatientById(long id, Patient patient);
	void deletePatientById(Long id);
	Patient loginPatient(String username, String password);
	

}
