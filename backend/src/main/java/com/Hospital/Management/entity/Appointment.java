package com.Hospital.Management.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "Appointments")
public class Appointment {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	 	private Long id;
		
		
		@Column(name = "first_name")
		//@NotNull(message = "Please Enter Your FirstName")
	    private String firstname;
		
		@Column(name = "last_name")
		private String lastname;
		
		//@Min(1) //Age should be at least 1
	    private int age;
	    
	    @Column(name = "disease_symptom")
	   // @NotNull(message = "Symptoms cannot be null")
	    private String symptoms;
	   
//	    @Column(name = "phone_number",unique = true)
//	    @Size(min = 10, max = 10, message = "Number must be exactly 10 digits")
//	    private String number;

	    @ManyToOne
	    private Patient patient;

	    @ManyToOne
	    private Doctor doctor;

//		public Appointment(Long id, @NotNull(message = "Please Enter Your FirstName") String firstname,
//				String lastname, @Min(1) int age, @NotNull(message = "Symptoms cannot be null") String symptoms,
//				@Size(min = 10, max = 10, message = "Number must be exactly 10 digits") String number, Patient patient,
//				Doctor doctor) {
//			super();
//			this.id = id;
//			this.firstname = firstname;
//			this.lastname = lastname;
//			this.age = age;
//			this.symptoms = symptoms;
//			this.number = number;
//			this.patient = patient;
//			this.doctor = doctor;
//		}

		public Appointment() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getFirstname() {
			return firstname;
		}

		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}

		public String getLastname() {
			return lastname;
		}

		public void setLastname(String lastname) {
			this.lastname = lastname;
		}

		public int getAge() {
			return age;
		}

		public void setAge(int age) {
			this.age = age;
		}

		public String getSymptoms() {
			return symptoms;
		}

		public void setSymptoms(String symptoms) {
			this.symptoms = symptoms;
		}

//		public String getNumber() {
//			return number;
//		}
//
//		public void setNumber(String number) {
//			this.number = number;
//		}

		public Patient getPatient() {
			return patient;
		}

		public void setPatient(Patient patient) {
			this.patient = patient;
		}

		public Doctor getDoctor() {
			return doctor;
		}

		public void setDoctor(Doctor doctor) {
			this.doctor = doctor;
		}
	    
	    
}
