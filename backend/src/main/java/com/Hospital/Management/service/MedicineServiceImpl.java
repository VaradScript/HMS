package com.Hospital.Management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Hospital.Management.entity.Medicine;
import com.Hospital.Management.repository.MedicineRepository;

@Service
public class MedicineServiceImpl implements MedicineService {
	
	@Autowired
	private MedicineRepository medicineRepository;

	@Override
	public List<Medicine> getAllMedicines() {
		// TODO Auto-generated method stub
		return medicineRepository.findAll();
	}

	@Override
	public Medicine getMedicineById(long id) {
		// TODO Auto-generated method stub
		return medicineRepository.findById(id).orElseThrow(()->
				new RuntimeException("Medicine not found with Id:" +id));
	}

	@Override
	public Medicine addMedicine(Medicine medicine) {
		// TODO Auto-generated method stub
		return medicineRepository.save(medicine);
	}

	@Override
	public Medicine updateMedicineById(long id, Medicine medicine) {
		// TODO Auto-generated method stub
		Medicine existingMedicine = medicineRepository.findById(id).orElseThrow(()->
			new RuntimeException("Medicine not found with Id:"));
		medicine.setId(id);
		return medicineRepository.save(medicine);
	}

	@Override
	public void deleteMedicineById(long id) {
		// TODO Auto-generated method stub
		medicineRepository.deleteById(id);
		
	}
	

}
