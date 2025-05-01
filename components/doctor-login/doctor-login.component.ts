import { Component } from '@angular/core';
import { DoctorLoginService } from '../../service/doctor-login.service';
import { Doctor } from '../../model/doctor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doctor-login',
  standalone: false,
  templateUrl: './doctor-login.component.html',
  styleUrl: './doctor-login.component.css'
})
export class DoctorLoginComponent {

  constructor(private doctorLoginService:DoctorLoginService, private router:Router) {}
  doctor = new Doctor();
  flag:boolean=false;

  doctorLogin() {
    this.flag=this.doctorLoginService.doctorLogin(this.doctor.username,this.doctor.password);
    if(this.flag)
    {
      this.router.navigate(['doctorhomeurl']);
    }else{
      alert("login failed invalid credential")
    }
  }

  doctorreg() {
    this.router.navigate(['docregurl']);
  }

  

}



