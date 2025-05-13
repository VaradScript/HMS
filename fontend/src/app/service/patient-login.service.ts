import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientLoginService {

  constructor(private httpClient:HttpClient) { }
  url = "http://localhost:8080/api/patient"
  

  // patientLogin(username:any,password:any)
  // {
  //   if(username=="aaa" && password=="111")
  //   {
  //     return true;
  //   }else
  //   return false;
  // }

  patientLogin(username: string, password: string,patient:any): Observable<any> {
   // console.log(username,password)
    //const credentials = { username, password };
    return this.httpClient.post(`${this.url}/login/${username}/${password}`, patient);
  }

  registerPatient(patient:any) {
    return this.httpClient.post(`${this.url}`,patient);
  }
}

// registerPatient(username: string, password: string): boolean {
//   const existingPatient = this.registeredPatients.find(patient => patient.username === username);
//   if (existingPatient) {
//     console.error('Username already exists');
//     return false; // Username already taken
//   }
//   this.registeredPatients.push({ username, password });
//   console.log('Patient registered successfully');
//   return true;
// }

// // Patient login
// patientLogin(username: string, password: string): boolean {
//   const patient = this.registeredPatients.find(patient => patient.username === username && patient.password === password);
//   return !!patient; // Returns true if patient is found, otherwise false
// }
