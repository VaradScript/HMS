package com.Hospital.Management.service;

import java.util.List;

import com.Hospital.Management.entity.Doctor;

public interface DoctorService {
	
	Doctor addDoctor(Doctor doctor);
	List<Doctor> getAllDoctors();
	Doctor getDoctorById(Long id);
	Doctor updateDoctorById(Long id, Doctor doctor);
	void deleteDoctorById(Long id);

}
