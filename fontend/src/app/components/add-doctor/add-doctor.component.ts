import { Component } from '@angular/core';
import { DoctorService } from '../../service/doctor.service';
import { Doctor } from '../../model/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  standalone: false,
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {

  doctor:Doctor=new Doctor();

  constructor(private doctorService:DoctorService, private router:Router){}

  saveDoctor() {
    this.doctorService.addDoctor(this.doctor).subscribe(data =>{
      console.log(data);
      this.goToDoctor();
    })
  }

  onSubmit() {
    this.saveDoctor();
  }

  goToDoctor() {
    this.router.navigate(['/doctorurl'])
  }

}
