package com.Hospital.Management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Admin {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 
	 @NotNull(message = "Username cannot be null")
	 @Size(min = 4, max = 20, message = "Username must be between 4 and 20 characters")
	 private String username;
	 
	 @Size(min = 8, message = "Password must be at least 8 characters long")
	 private String password;

	public Admin(Long id,
			@NotNull(message = "Username cannot be null") @Size(min = 4, max = 20, message = "Username must be between 4 and 20 characters") String username,
			@Size(min = 8, message = "Password must be at least 8 characters long") String password) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	}

	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
