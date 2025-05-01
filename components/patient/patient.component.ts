import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/patient';
import { Appointment } from '../../model/appointment';


@Component({
  selector: 'app-patient',
  standalone: false,
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {
  
  patients: Patient[] = []; // ✅ Declare 'patients' property properly

 
  constructor(private patientService: PatientService ,private router:Router) {}

  

  ngOnInit(): void {
    this.getPatientsList();
  }

  getPatientsList(): void {
    this.patientService.getPatientList().subscribe((data: Patient[]) => {
      this.patients = data; // ✅ Now TypeScript knows 'data' is an array of 'Patient'
    });
  }

  delete(id:any) {
    this.patientService.deletePatientById(id).subscribe(data =>{
      console.log(data);
      this.getPatientsList();
    })
  }

  update(id:any) {
   this.router.navigate(['updatepatienturl',id]);
  }

}



