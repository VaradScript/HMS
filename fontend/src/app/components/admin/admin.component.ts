import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Admin } from '../../model/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private loginService:LoginService,private router:Router){}
  flag:boolean=false;
admin=new Admin();
  adminLogin()
  {
   this.flag= this.loginService.adminLogin(this.admin.username,this.admin.password);
   if(this.flag)
   {
    this.router.navigate(['adminhomeurl']);
   }else{
    alert("login failed invalid credentials");
   }
    
  }
}
