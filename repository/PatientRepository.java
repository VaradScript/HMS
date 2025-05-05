package com.Hospital.Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hospital.Management.entity.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{
	Patient findByUsernameAndPassword(String username,String password);

}
