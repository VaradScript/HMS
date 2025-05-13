import { Injectable } from '@angular/core';
import { Patient } from '../model/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

 
  constructor(private httpClient: HttpClient) {}

   private baseUrl="http://localhost:8080/api/patient"
  // ✅ Ensure this method exists
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
}

addPatient(patient:Patient):Observable<Patient[]>{
    return this.httpClient.post<Patient[]>(`${this.baseUrl}`,patient);
}

deletePatientById(id:number):Observable<object> {
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}

updatePatient(id:number,patientData:any):Observable<any> {
  return this.httpClient.put(`${this.baseUrl}/${id}`,patientData);
}

getPatientById(patientId:any)
{
  return this.httpClient.get(`${this.baseUrl}/${patientId}`);
}
// getPatientById(): Observable<any[]> {
//   return this.httpClient.get<any[]>(this.baseUrl);
// }

}