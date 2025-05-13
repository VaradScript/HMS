package com.Hospital.Management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Management.entity.Doctor;
import com.Hospital.Management.repository.DoctorRepository;

@Service
public class DoctorServiceImpl implements DoctorService {
	
	@Autowired
	private  DoctorRepository doctorRepository;

	@Override
	public List<Doctor> getAllDoctors() {
		// TODO Auto-generated method stub
		return doctorRepository.findAll();
	}

	@Override
	public Doctor getDoctorById(Long id) {
		// TODO Auto-generated method stub
		return doctorRepository.findById(id).orElseThrow(() ->
			new RuntimeException("Doctor not found with ID: " + id));
	}

	@Override
	public Doctor addDoctor(Doctor doctor) {
		// TODO Auto-generated method stub
		return doctorRepository.save(doctor);
	}

	@Override
	public Doctor updateDoctorById(Long id, Doctor doctor) {
		// TODO Auto-generated method stub
		Doctor existingDoctor = doctorRepository.findById(id).orElseThrow(()->
					new RuntimeException("Doctor not found with ID:"+id));
		doctor.setId(id);
		return doctorRepository.save(doctor);
		
	}

	@Override
	public void deleteDoctorById(Long id) {
		// TODO Auto-generated method stub
		doctorRepository.deleteById(id);
		
	}

}
