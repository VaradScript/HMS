import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  standalone: false,
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {

  constructor(private router: Router) {}

  // Define the missing method
  viewPatient() {
    // Navigate to the patient view page (adjust the route as needed)
    this.router.navigate(['patienturl']);
  }


  viewDoctor() {
    this.router.navigate(['doctorurl']);
  }

  viewMedicine() {
    this.router.navigate(['medicineurl']);
  }

  viewAppointments() {
    this.router.navigate(['appointmenturl']);
  }

}
