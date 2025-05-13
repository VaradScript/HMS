package com.Hospital.Management.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "patients")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "first_name")
	@NotNull(message = "Please Enter Your FirstName")
    private String firstName;
	
	@Column(name = "last_name")
    private String lastName;
	
    private int age;
    
    @Column(name = "Gender")
    private String gender;
		
	
    
    @Column(name = "blood_group")
//    @Pattern(regexp = "^(A|B|AB|O)[+-]$", message = "Invalid blood group format")
    private String bloodGroup;
    
    private String prescription;
    
    private String dose;
    
//    @Pattern(regexp = "Normal|Emergency", message = "Urgency must be Normal or Emergency")
    private String urgency;
    
    @Column(nullable = true)
//    @Min(value = 0, message = "Fees must be non-negative")
    private double fees;
    
    private String username;
    private String password;

//	public Patient(Long id, @NotNull(message = "Please Enter Your FirstName") String firstName, String lastName,
//			int age, String bloodGroup, String prescription, String dose, String urgency, double fees, String gender) {
//		super();
//		this.id = id;
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.age = age;
//		this.bloodGroup = bloodGroup;
//		this.prescription = prescription;
//		this.dose = dose;
//		this.urgency = urgency;
//		this.fees = fees;
//		this.gender = gender;
//	}

	

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getDose() {
		return dose;
	}

	public void setDose(String dose) {
		this.dose = dose;
	}

	public String getUrgency() {
		return urgency;
	}

	public void setUrgency(String urgency) {
		this.urgency = urgency;
	}

	public double getFees() {
		return fees;
	}

	public void setFees(double fees) {
		this.fees = fees;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    

}
