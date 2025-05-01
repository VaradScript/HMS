import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../../service/medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent implements OnInit {

  medicine:any;
  medicineId:any;
  constructor(private medicineService:MedicineService, private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
   this.medicineId=this.activatedRoute.snapshot.params['id'];
   this.medicineService.getMedicineById(this.medicineId).subscribe(
    (Response:any)=>
    {
      this.medicine=Response;
    }
   ) 
  }

  onSubmit() {
    this.medicineService.updateMedicine(this.medicineId,this.medicine).subscribe(
      (Response:any)=>
      {
        alert("data updated successfully");
        this.router.navigate(['medicineurl']);
      }
    )
  }


}




