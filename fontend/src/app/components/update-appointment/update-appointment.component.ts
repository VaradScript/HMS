import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appointment',
  standalone: false,
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.css'
})
export class UpdateAppointmentComponent implements OnInit {

  appointments:any;
  appointmentId:any;

  constructor(private appointmentservice:AppointmentService, private router:Router, private activatedRoute:ActivatedRoute) {}


  ngOnInit(): void {
    this.appointmentId=this.activatedRoute.snapshot.params['id'];
    this.appointmentservice.getAppointmentById(this.appointmentId).subscribe(
      (Response:any)=>{
        this.appointments=Response;
      }
    )
    
  }

  onSubmit() {

    this.appointmentservice.updateAppointment(this.appointmentId,this.appointments).subscribe(
      (Response:any) =>
      {
        alert("data updated successfully");
        this.router.navigate(['appointmenturl']);
      }
    )
  }

}
