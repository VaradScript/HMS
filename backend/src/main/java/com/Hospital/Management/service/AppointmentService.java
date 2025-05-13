package com.Hospital.Management.service;

import java.util.List;

import com.Hospital.Management.entity.Appointment;

public interface AppointmentService {
	
	 Appointment scheduleAppointment(Long patientId, Appointment appointment);
	 List<Appointment> getAllAppointments();
	 Appointment getAppointmentById(Long id);
	 Appointment updateAppointmentById(Long id, Appointment appointment);
	 void cancelAppointmentById(Long id);
	List<Appointment> getAllAppointmentsByPatientId(long patientId);

}
