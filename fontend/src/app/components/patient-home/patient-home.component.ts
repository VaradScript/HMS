import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  standalone: false,
  templateUrl: './patient-home.component.html',
  styleUrl: './patient-home.component.css'
})
export class PatientHomeComponent implements OnInit {

  patientId:any;
  ngOnInit(): void {
    this.patientId=sessionStorage.getItem('pid');
  }
  constructor(private router:Router) {}

  viewDoctor() {
    this.router.navigate(['doctorurl']);
  }

  viewAppointments() {
    this.router.navigate(['appointmenturl']);
  }

}
