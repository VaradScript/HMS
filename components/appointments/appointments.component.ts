import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../service/appointment.service';
import { Appointment } from '../../model/appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {

  appointments:any;
patientId:any;

  constructor(private appointmentService:AppointmentService, private router:Router) {}

  ngOnInit(): void {
    this.patientId=sessionStorage.getItem('pid');
    this.getAppointmentListByPatientId(this.patientId);
  }

  getAppointmentList(){
    this.appointmentService.getAppointmentList().subscribe((data:any) =>{
      this.appointments=data;
    });
  }
  getAppointmentListByPatientId(patientId:any){
    this.appointmentService.getAppointmentListByPatientId(patientId).subscribe((data:any) =>{
      this.appointments=data;
    });
  }

  delete(id:any) {
    this.appointmentService.deleteAppointmentById(id).subscribe(data =>{
      console.log(data);
      this.getAppointmentList();
    })
  }

  update(id:any) {
    this.router.navigate(['updateappointmenturl',id]);
  }

}
