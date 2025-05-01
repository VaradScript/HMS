import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../model/doctor';
import { DoctorLoginService } from '../../../service/doctor-login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorregistration',
  standalone: false,
  templateUrl: './doctorregistration.component.html',
  styleUrl: './doctorregistration.component.css'
})
export class DoctorregistrationComponent implements OnInit {

  doctor:Doctor=new Doctor();
  patientForm!: FormGroup;

  constructor(private doctorLoginService:DoctorLoginService,private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {

  }


  doctorRegistration() {
    console.log("Button clicked");
  
    this.doctorLoginService.doctorRegistration(this.doctor).subscribe(
      (data: any) => {
        if (data) {
          alert("Doctor registered successfully!");
          this.router.navigate(['doctorloginurl']);
        }
      },
      
    );
  }
  
}
