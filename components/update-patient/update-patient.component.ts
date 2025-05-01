import { Component, OnInit } from '@angular/core';
import { Patient } from '../../model/patient';
import { PatientService } from '../../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent implements OnInit{

  patient:any;
  patientId:any;
  constructor(private patientService:PatientService, private activatedRoute: ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.patientId=this.activatedRoute.snapshot.params['id'];
    this.patientService.getPatientById(this.patientId).subscribe(
      (Response:any)=>
      {
this.patient=Response;
      }
    )
  }
  onSubmit()
  {
    this.patientService.updatePatient(this.patientId,this.patient).subscribe(
      (Response:any)=>
      {
        alert("data updated successfuly");
        this.router.navigate(['patienturl']);
      }
    )
  }

}
