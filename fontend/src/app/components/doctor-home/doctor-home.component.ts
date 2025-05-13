import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  standalone: false,
  templateUrl: './doctor-home.component.html',
  styleUrl: './doctor-home.component.css'
})
export class DoctorHomeComponent {

  constructor(private router:Router) {}

  viewPatient() {
    this.router.navigate(['patienturl']);
  }


  viewMedicine() {
    this.router.navigate(['medicineurl']);
  }


  viewAppointments() {
    this.router.navigate(['appointmenturl']);
  }

}
