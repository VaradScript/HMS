import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient ) { }

  private baseurl="http://localhost:8080/api/doctor"

  getDoctorList():Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseurl}`)
  }

  addDoctor(doctor:Doctor):Observable<Doctor[]> {
    return this.httpClient.post<Doctor[]>(`${this.baseurl}`,doctor);
  }

  deleteDoctorById(id:number):Observable<object> {
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

  getDoctorById(doctorId:any) {
    return this.httpClient.get(`${this.baseurl}/${doctorId}`);
  }

  updateDoctor(id:number,doctorData:any):Observable<any> {

    return this.httpClient.put(`${this.baseurl}/${id}`,doctorData);
  }

  // doctorRegistration(doctorData: any): Observable<any> {
  //   return this.httpClient.post(this.baseurl, doctorData);
  // }
}
