import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl:'./welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private router:Router){}

  adminReg()
  {
    this.router.navigate(['adminregurl']);
  }

  patientLogin()
  {
    this.router.navigate(['patientloginurl'])
  }

  doctorLogin()
  {
    this.router.navigate(['doctorloginurl'])
  }
}