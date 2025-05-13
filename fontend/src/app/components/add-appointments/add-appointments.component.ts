import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { AppointmentService } from '../../service/appointment.service';
import { Router } from '@angular/router';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/patient';

@Component({
  selector: 'app-add-appointments',
  standalone: false,
  templateUrl: './add-appointments.component.html',
  styleUrl: './add-appointments.component.css'
})
export class AddAppointmentsComponent implements OnInit {

  appointments:Appointment = new Appointment();
  patient:any[]=[];
  patient_id: any ;
  doctor_id:any;
  selectedPatient: any = 'Select a Patient';
  selectedPatient1=new Patient();

  constructor(private appointmentService:AppointmentService,private router:Router, private patientService:PatientService) {}

  onSubmit() {
    console.log(this.appointments);
    this.appointmentService.addAppointments(this.appointments,this.selectedPatient).subscribe(data =>{
      console.log(data);
      this.router.navigate(['appointmenturl']);
    })

  }
  ngOnInit(): void {
    this.fetchPatientById();
    
  }
  fetchPatientById() {
    this.patientService.getPatientList().subscribe((data) =>{
      this.patient=data;
    });
  }

  selectPatient(patient:any) {
    this.selectedPatient=patient.id;
    console.log(this.selectedPatient);
    this.patientService.getPatientById(this.selectedPatient).subscribe(
      (data:any)=>{
      this.selectedPatient1=data;
      console.log(this.selectedPatient1);
      }
    )
  }

}
