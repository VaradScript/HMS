import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../model/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8080/api/medicine"

  getMedicineList():Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(`${this.baseurl}`)
  }

  addMedicine(medicine:Medicine):Observable<Medicine[]> {
    return this.httpClient.post<Medicine[]>(`${this.baseurl}`,medicine);
  }

  deleteMedicineById(medicineId:number):Observable<object> {
    return this.httpClient.delete<object>(`${this.baseurl}/${medicineId}`);
  }

  getMedicineById(medicineId:any) {
    return this.httpClient.get(`${this.baseurl}/${medicineId}`);
  }

  updateMedicine(medicineId:number,medicineData:any):Observable<any> {
    return this.httpClient.put(`${this.baseurl}/${medicineId}`,medicineData);
  }
  
}



