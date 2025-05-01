import { Component } from '@angular/core';
import { PatientLoginService } from '../../service/patient-login.service';
import { Patient } from '../../model/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  standalone: false,
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent {

  username: string = '';
  password: string = '';
  message: string = '';
patientId:any;
  constructor(private patientLoginService:PatientLoginService,private router:Router){}
  patient = new Patient();
  flag:boolean=false;
  patientLogin() {
    this.patientLoginService.patientLogin(this.patient.username,this.patient.password,this.patient).subscribe(
      (response: any) => {
        if (response!=null) {
          alert('Login successful!');
          this.patientId=response.id;
          sessionStorage.setItem('pid',this.patientId);
          this.router.navigate(['patienthomeurl']);
          // Navigate to the dashboard or other page
        } else {
          alert('Invalid credentials');
        }
      },
      (error) => {
        console.error('Login error:', error);
        alert('An error occurred while logging in');
      }
    );
  }

  // registerPatient() {
  //   const success = this.patientLoginService.registerPatient(this.username, this.password);
  //   this.message = success ? 'Registration successful' : 'Username already exists';
  // }

  // patientLogin() {
  //   const isAuthenticated = this.patientLoginService.patientLogin(this.username, this.password);
  //   this.message = isAuthenticated ? 'Login successful' : 'Invalid credentials';
  //   // this.router.navigate(['patienturl'])
  // }
  
  // forgotpass() {
  //   this.router.navigate(['forgotpassurl']);
  // }

  createacc() {
    this.router.navigate(['createaccurl']);
  }

}