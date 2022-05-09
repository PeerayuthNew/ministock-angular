import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  // ตัวแปรธรรมดา
  message:string = "Hello Angular";

  // ตัวแปร object
  profile = {
    "name":"New",
    "tel":"081132123",
    "gender":"Male"
  }

  // 2 Way Data Bliding
  userData = 
    {
      "email":"",
      "password":""
    }
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submitLogin(){
    if(this.userData.email == "admin@gmail.com" && this.userData.password == "1234")
    {
      //alert("Login Success");
      this.router.navigate(['backend']);
    }else{
      alert("Login Fail!!!!!");
    }
  }
}
