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

import com.Hospital.Management.entity.Appointment;
import com.Hospital.Management.service.AppointmentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/appointment")
public class AppointmentController {
	
	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/{patientId}")
	public ResponseEntity<Appointment> scheduleAppointment(@PathVariable("patientId") Long patientId,  @RequestBody Appointment appointment) {
		return new ResponseEntity<Appointment> (appointmentService.scheduleAppointment(patientId,appointment),HttpStatus.CREATED);
	}
	
	@GetMapping("bypatientId/{patientId}")
	public List<Appointment> getAllAppointments(@PathVariable("patientId") long patientId) {
		return appointmentService.getAllAppointmentsByPatientId(patientId);
	}
	
	@GetMapping
	public List<Appointment> getAllAppointments() {
		return appointmentService.getAllAppointments();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable long id) {
		return new ResponseEntity<Appointment>(appointmentService.getAppointmentById(id),HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Appointment> updateAppointmentById(@PathVariable long id, @RequestBody Appointment appointment) {
		return new ResponseEntity<Appointment>(appointmentService.updateAppointmentById(id,appointment),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> cancelAppointmentById(@PathVariable long id) {
		appointmentService.cancelAppointmentById(id);
		return ResponseEntity.noContent().build();
	}

}
