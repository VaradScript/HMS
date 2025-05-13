import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../model/doctor';

@Component({
  selector: 'app-update-doctor',
  standalone: false,
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.css'
})
export class UpdateDoctorComponent implements OnInit {

  doctor:any;
  doctorId:any;
  constructor(private doctorService:DoctorService, private activatedRoute:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.doctorId=this.activatedRoute.snapshot.params['id'];
    this.doctorService.getDoctorById(this.doctorId).subscribe(
      (Response:any)=>
      {
        this.doctor=Response;
      }
    )
    
  }

  onSubmit(){
    this.doctorService.updateDoctor(this.doctorId,this.doctor).subscribe(
      (Response:any)=>
      {
        alert("data updated successfully");
        this.router.navigate(['doctorurl']);
      }
    )
  }

}
