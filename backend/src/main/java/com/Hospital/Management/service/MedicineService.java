package com.Hospital.Management.service;

import java.util.List;

import com.Hospital.Management.entity.Medicine;

public interface MedicineService {
	
	Medicine addMedicine(Medicine medicine);
	List<Medicine> getAllMedicines();
	Medicine getMedicineById(long id);
	Medicine updateMedicineById(long id, Medicine medicine);
	void deleteMedicineById(long id);

}
