import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor';
import { DoctorService } from '../../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent implements OnInit {

  doctors : Doctor[] = [];

  constructor(private doctorService: DoctorService,private router:Router) {}

  ngOnInit(): void {
    this.getDoctorsList();
  }

  getDoctorsList():void {
    this.doctorService.getDoctorList().subscribe((data:Doctor[])=>{
      this.doctors=data;
    });
  }

  delete(id:any) {
    this.doctorService.deleteDoctorById(id).subscribe(data =>{
      console.log(data);
      this.getDoctorsList();
    })
  }

 

}
