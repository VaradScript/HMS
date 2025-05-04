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

import com.Hospital.Management.entity.Medicine;
import com.Hospital.Management.service.MedicineService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/medicine")
public class MedicineController {
	
	@Autowired
	private MedicineService medicineService;
	
	@PostMapping
	public ResponseEntity<Medicine> addMedicine(@RequestBody Medicine medicine) {
		return new ResponseEntity<Medicine>(medicineService.addMedicine(medicine),HttpStatus.CREATED);
	}
	
	@GetMapping
	public List<Medicine> getAllMedicines() {
		return medicineService.getAllMedicines();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable long id) {
		return new ResponseEntity<Medicine>(medicineService.getMedicineById(id),HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Medicine> updateMedicineById(@PathVariable long id,@RequestBody Medicine medicine) {
		return new ResponseEntity<Medicine>(medicineService.updateMedicineById(id, medicine),HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteMedicineById(@PathVariable long id) {
		medicineService.deleteMedicineById(id);
		return ResponseEntity.noContent().build();
	}

}
