package com.Hospital.Management.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.Hospital.Management.entity.Patient;
import com.Hospital.Management.service.PatientService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/patient")
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	
	@PostMapping
	public ResponseEntity<Patient> addPatient(@RequestBody Patient patient){
		return new ResponseEntity<Patient>(patientService.addPatient(patient),HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<Patient> getAllPatients(){
		return patientService.getAllPatients();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Patient> getPatientById(@PathVariable long id) {
		return new ResponseEntity<Patient>(patientService.getPatientById(id),HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Patient> updatePatientById(@PathVariable long id, @RequestBody Patient patient) {
		Patient updatedPatient = patientService.updatePatientById(id, patient);
		return ResponseEntity.ok(updatedPatient);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePatientById(@PathVariable long id) {
		patientService.deletePatientById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("/login/{username}/{password}")
    public ResponseEntity<Patient> loginPatient(@PathVariable("username") String username,@PathVariable("password") String password,@RequestBody Patient patient) {
        Patient patient1 = patientService.loginPatient(username,password);
       return new ResponseEntity<Patient>(patient1,HttpStatus.OK);
    }

	
}
