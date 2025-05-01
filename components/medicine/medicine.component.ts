import { Component, OnInit } from '@angular/core';
import { Medicine } from '../../model/medicine';
import { MedicineService } from '../../service/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: false,
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent implements OnInit {

  medicines: Medicine[]=[];

  constructor(private medicineService:MedicineService, private router:Router){}

  ngOnInit(): void {
    this.getMedicineList();
  }

  getMedicineList():void{
    this.medicineService.getMedicineList().subscribe((data:Medicine[])=>{
      this.medicines=data;
    });
  }

  delete(medicineId:any) {
    this.medicineService.deleteMedicineById(medicineId).subscribe(data =>{
      console.log(data);
      this.getMedicineList();
    })
  }

  update(medicineId:any) {
    this.router.navigate(['updatemedicineurl',medicineId]);
  }
  

}


