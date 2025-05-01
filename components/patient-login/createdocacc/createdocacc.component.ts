import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientLoginService } from '../../../service/patient-login.service';
import { Patient } from '../../../model/patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createdocacc',
  standalone: false,
  templateUrl: './createdocacc.component.html',
  styleUrl: './createdocacc.component.css'
})
export class CreatedocaccComponent implements OnInit {

  patientForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  patient:Patient = new Patient();

  constructor(private fb: FormBuilder, private patientLoginService:PatientLoginService,private router:Router) {}

  ngOnInit(): void {
    // this.patientForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   age: ['', [Validators.required, Validators.min(1)]],
    //   gender: ['', Validators.required],
    //   phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    //   username: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }

//   registerPatient() {
//     if (this.patientForm.valid) {
//       this.httpClient.post('http://localhost:8080/api/patient', this.patientForm.value).subscribe(
//         (response: any) => {
//           this.successMessage = response.message;
//           this.errorMessage = '';
//           this.patientForm.reset();
//         },
//         (error) => {
//           this.successMessage = '';
//           this.errorMessage = error.error.error;
//         }
//       );
//     }
//   }

registerPatient() {
  console.log("button clicked");
  

    this.patientLoginService.registerPatient(this.patient).subscribe(
      (data:any)=>{
        if(data!=null){
          alert("Patient register successfully");
          this.router.navigate(['patientloginurl']);
        }
      }
    )
   

}
}


