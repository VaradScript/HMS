import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  constructor() { }

  adminLogin(username:any,password:any)
  {
    if(username=="varada" && password=="1234")
    {
      return true;
    }else
    return false;
  }
}
