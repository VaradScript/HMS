package com.Hospital.Management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Management.entity.Appointment;
import com.Hospital.Management.entity.Doctor;
import com.Hospital.Management.entity.Patient;
import com.Hospital.Management.repository.AppointmentRepository;

import jakarta.transaction.Transactional;

@Service
public class AppointmentServiceImpl implements AppointmentService {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	@Autowired
	private PatientService patientService;
	
	@Autowired
	private DoctorService doctorService;

	@Override
	public List<Appointment> getAllAppointments() {
		// TODO Auto-generated method stub
		return appointmentRepository.findAll();
	}

	@Override
	public Appointment getAppointmentById(Long id) {
		// TODO Auto-generated method stub
		return appointmentRepository.findById(id).orElseThrow(() ->
			new RuntimeException("Appointments not found with id:" +id));	
	}

	@Transactional
	@Override
	public Appointment scheduleAppointment(Long patientId, Appointment appointment) {
		// TODO Auto-generated method stub
		Patient patient = patientService.getPatientById(patientId);
		//Doctor doctor = doctorService.getDoctorById(doctorId);
		appointment.setPatient(patient);
		appointment.setFirstname(patient.getFirstName());
		appointment.setLastname(patient.getLastName());
		appointment.setAge(patient.getAge());
		
		//appointment.setDoctor(doctor);
		return appointmentRepository.save(appointment);
		
	}

	@Override
	public Appointment updateAppointmentById(Long id, Appointment appointment) {
		// TODO Auto-generated method stub
		
		Appointment existingAppointment = appointmentRepository.findById(id).orElseThrow(()->
				new RuntimeException("Appointment not found with Id" +id));
		appointment.setId(id);
		return appointmentRepository.save(appointment);
	}

	@Override
	public void cancelAppointmentById(Long id) {
		// TODO Auto-generated method stub
		appointmentRepository.deleteById(id);
		
	}

	@Override
	public List<Appointment> getAllAppointmentsByPatientId(long patientId) {
		// TODO Auto-generated method stub
		return appointmentRepository.findByPatientId(patientId);
	}
	
	

}
