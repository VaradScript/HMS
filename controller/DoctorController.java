package com.Hospital.Management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Hospital.Management.entity.Doctor;
import com.Hospital.Management.service.DoctorService;

import jakarta.persistence.Id;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/doctor")
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
	@PostMapping
	public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
		return new ResponseEntity<Doctor>(doctorService.addDoctor(doctor),HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<Doctor> getAllDoctors() {
		return doctorService.getAllDoctors();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable long id) {
		return new ResponseEntity<Doctor>(doctorService.getDoctorById(id),HttpStatus.OK);
	}
	
	 @PutMapping("/{id}")
	    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody Doctor doctor) {
	        return ResponseEntity.ok(doctorService.updateDoctorById(id, doctor));
	    }
	 
	 @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id) {
	        doctorService.deleteDoctorById(id);
	        return ResponseEntity.noContent().build();
	    }
}
