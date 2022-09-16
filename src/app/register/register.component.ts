import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';
import { UserRegister } from '../Models/registerUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:UserRegister;
  model: UserRegister = new UserRegister();
  token:string;
  lan=+sessionStorage.getItem("lang")
  constructor(private accountService: AccountService, private router: Router,private alertifyService:AlertifyService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("lang")==null||sessionStorage.getItem("lang")=="null"){
      this.lan=1
    }
    
  }
  register(form: NgForm){
    console.log(this.model.firstName)
    var firstName= document.getElementById("firstName") as HTMLInputElement
    var lastName= document.getElementById("lastName") as HTMLInputElement
    var username= document.getElementById("username") as HTMLInputElement
    var password= document.getElementById("password") as HTMLInputElement
    if(firstName.value.length<2){
      this.alertifyService.error("İsim minimum 5 karakter içermelidir")
    }
    if(lastName.value.length<2){
      this.alertifyService.error("Soyisim minimum 5 karakter içermelidir")
    }
    if(username.value.length<4){
      this.alertifyService.error("Kullanıcı Adı minimum 6 karakter içermelidir")
    }
    if(password.value.length<4){
      this.alertifyService.error("Şifre minimum 6 karakter içermelidir")
    }
    if(firstName.value.length>=2 && lastName.value.length>=2 && username.value.length>=4 && password.value.length>=4){
      console.log("sdasdasd")
      this.accountService.register(this.model).subscribe(data=>{
        sessionStorage.setItem("Token "+this.model.username,data)
        
      })
      
      this.router.navigate(["login"]);
    }
    
  }

}
