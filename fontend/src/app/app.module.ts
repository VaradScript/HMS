import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { PatientComponent } from './components/patient/patient.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './components/doctor/doctor.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AddAppointmentsComponent } from './components/add-appointments/add-appointments.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientHomeComponent } from './components/patient-home/patient-home.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { AddMedicineComponent } from './components/add-medicine/add-medicine.component';
import { UpdateMedicineComponent } from './components/update-medicine/update-medicine.component';
import { UpdateAppointmentComponent } from './components/update-appointment/update-appointment.component';
import { ForgotpassComponent } from './components/patient-login/forgotpass/forgotpass.component';
import { CreatedocaccComponent } from './components/patient-login/createdocacc/createdocacc.component';
import { DoctorregistrationComponent } from './components/doctor-login/doctorregistration/doctorregistration.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WelcomeComponent,
    AdminhomeComponent,
    PatientComponent,
    DoctorComponent,
    MedicineComponent,
    AppointmentsComponent,
    AddAppointmentsComponent,
    AddDoctorComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    PatientLoginComponent,
    PatientHomeComponent,
    UpdateDoctorComponent,
    DoctorLoginComponent,
    DoctorHomeComponent,
    AddMedicineComponent,
    UpdateMedicineComponent,
    UpdateAppointmentComponent,
    ForgotpassComponent,
    CreatedocaccComponent,
    DoctorregistrationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
