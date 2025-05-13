import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8080/api/appointment"

  getAppointmentListByPatientId(patientId:any){
    return this.httpClient.get(`${this.baseurl}/bypatientId/${patientId}`);
  }
  getAppointmentList():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseurl}`)
  }

  addAppointments(appointments:any,patientId:number) {
    return this.httpClient.post(`${this.baseurl}/${patientId}`,appointments);
  }

  deleteAppointmentById(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

  getAppointmentById(appointmentId:any) {
    return this.httpClient.get(`${this.baseurl}/${appointmentId}`);
  }

  updateAppointment(id:number, appointmentData:any):Observable<any> {
    return this.httpClient.put(`${this.baseurl}/${id}`,appointmentData);
  }
}