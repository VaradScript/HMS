import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { PatientComponent } from './components/patient/patient.component';
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

const routes: Routes = [{path:'',component:WelcomeComponent},
  {path:'adminregurl',component:AdminComponent},
{path:'adminhomeurl',component:AdminhomeComponent},
{path:'patienturl',component:PatientComponent},
{path:'doctorurl',component:DoctorComponent},
{path:'medicineurl',component:MedicineComponent},
{path:'appointmenturl',component:AppointmentsComponent},
{path:'patientloginurl',component:PatientLoginComponent},
{path:'patienthomeurl',component:PatientHomeComponent},
{path:'addappointment',component:AddAppointmentsComponent},
{path:'add-doctor',component:AddDoctorComponent},
{path:'add-patient',component:AddPatientComponent},
{path:'addmedicineurl',component:AddMedicineComponent},
{path:'updatepatienturl/:id',component:UpdatePatientComponent},
{path:'updatedoctorurl/:Id',component:UpdateDoctorComponent},
{path:'updatemedicineurl/:Id',component:UpdateMedicineComponent},
{path:'updateappointmenturl/:id',component:UpdateAppointmentComponent},
{path:'doctorloginurl',component:DoctorLoginComponent},
{path:'doctorhomeurl',component:DoctorHomeComponent},
{path:'forgotpassurl',component:ForgotpassComponent},
{path:'createaccurl',component:CreatedocaccComponent},
{path:'docregurl', component:DoctorregistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
