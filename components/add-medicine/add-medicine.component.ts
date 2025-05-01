import { Component } from '@angular/core';
import { Medicine } from '../../model/medicine';
import { MedicineService } from '../../service/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  standalone: false,
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent {
  medicine:Medicine = new Medicine();

  constructor(private medicineService:MedicineService, private router:Router) {}

  savemedicine() {
    this.medicineService.addMedicine(this.medicine).subscribe(data =>{
      console.log(data);
      this.goToMedicine();
      })
  }
  goToMedicine(){
    this.router.navigate(['medicineurl']);
  }

  onSubmit() {
    this.savemedicine();

}
}