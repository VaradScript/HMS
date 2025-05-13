package com.Hospital.Management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Management.entity.Patient;
import com.Hospital.Management.repository.PatientRepository;

@Service
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	private PatientRepository patientRepository;

	@Override
	public List<Patient> getAllPatients() {
		// TODO Auto-generated method stub
		return patientRepository.findAll();
	}

	@Override
	public Patient getPatientById(Long id) {
		// TODO Auto-generated method stub
		return patientRepository.findById(id).orElseThrow(()->
				new RuntimeException("Patient not found with ID: " + id));
	}

	@Override
	public Patient addPatient(Patient patient) {
		// TODO Auto-generated method stub
		return patientRepository.save(patient);
	}
	
	@Override
	public Patient updatePatientById(long id, Patient patient) {
		Patient existingPatient = patientRepository.findById(id)
		        .orElseThrow(() -> new RuntimeException("Patient not found with ID: " + id));
		patient.setId(id);  
	    return patientRepository.save(patient);
	}

	@Override
	public void deletePatientById(Long id) {
		// TODO Auto-generated method stub
		patientRepository.deleteById(id);
		
	}

	@Override
	public Patient loginPatient(String username, String password) {
		// TODO Auto-generated method stub
		Patient patient = patientRepository.findByUsernameAndPassword(username,password);
       return patient;
	}

	
	


}
