import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private accountService:AccountService, private router: Router,private alertifyService:AlertifyService){}
 lang:number=1
  selectedOption: string | undefined;
  printedOption: string | undefined;
  langselect:number | undefined
  options = [
    { name: "English", value: 1 },
    { name: "Turkish", value: 2 }
  ]
  ngOnInit(): void {
    
    if(sessionStorage.getItem("lang")===null||sessionStorage.getItem("lang")==="null"){
      
      this.lang=1
      sessionStorage.setItem("lang","1")
    }
    
      if(sessionStorage.getItem("lang")=="1"){
        
        localStorage.setItem("lang","1")
        this.lang=1
        
        
      }
      else{
       
        this.lang=2
        
      }
    
  }
  print() {
    this.printedOption = this.selectedOption;
    console.log("My input: ", this.selectedOption);
  }
  title = 'Project';
  filterText=""
  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }
  logOut(){
    this.accountService.logOut();
    this.route2()
  }
  route2(){
    
    this.router.navigate(["login"]);
  }
  language(mode: number=1): void {
    
    this.lang = mode;
    sessionStorage.setItem("lang",mode.toString())
    
    window.location.reload()
  }
}
