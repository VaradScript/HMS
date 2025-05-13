import { Injectable } from '@angular/core';
import { Doctor } from '../model/doctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorLoginService {
  // doctorRegistration(doctor: Doctor) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private httpClient:HttpClient) { }
  url = "http://localhost:8080/api/doctor"

  doctorLogin(username:any, password:any) 
  {
    if(username=="johny" && password=="123")
    {
      return true;
    }else{
      return false;
    }
    
  }
  doctorRegistration(doctor:any) {
    return this.httpClient.post(`${this.url}`,doctor);
  }
  
}
