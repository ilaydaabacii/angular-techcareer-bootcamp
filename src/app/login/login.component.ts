import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { User } from '../Models/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: User = new User();
  loginTokenValue:string | undefined;
  lan=+sessionStorage.getItem("lang")
  constructor(private accountService: AccountService, private router: Router,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("lang")==null||sessionStorage.getItem("lang")=="null"){
      this.lan=1
    }
  }
  login(form: NgForm) {
    
    this.accountService.login(this.model).subscribe(data=>{
      this.accountService.Logged()
      this.loginTokenValue=data
      sessionStorage.setItem("isLoggedIn",this.model.username)
      sessionStorage.setItem(this.model.username,data)
      this.route();
    })
    
  }
  getTokenValue(){
    return this.loginTokenValue
  }
  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  route(){
    
    if(this.accountService.isLoggedIn()){
     
      this.router.navigate(["/index"]);
    }
    
    
  }
}
