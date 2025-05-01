import { Component } from '@angular/core';
import { Doctor } from '../../model/doctor';
import { DoctorService } from '../../service/doctor.service';
import { Patient } from '../../model/patient';
import { PatientService } from '../../service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  standalone: false,
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {

  patient:Patient = new Patient();

  constructor(private patientService:PatientService, private router:Router) {}

  savepatient() {
    this.patientService.addPatient(this.patient).subscribe(data => {
      console.log(data);
      this.goToPatient();
    })
  }

  onSubmit() {
    this.savepatient();
  }

  goToPatient() {
    this.router.navigate(['patienturl']);
  }

}
