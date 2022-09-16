import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { ContactusService } from '../services/contactus.service';
import { Contactus } from '../Models/Contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private AlertifyService:AlertifyService,private contactusService:ContactusService, private http:HttpClient) { }
  title="Product List"
  filterText=""
  displayMode:number=1
  contactus:Contactus[]= [];
  path="http://localhost:3030/api/contact-us"
  lan:number=+sessionStorage.getItem("lang")
  ngOnInit(): void {
    if(sessionStorage.getItem("lang")==null||sessionStorage.getItem("lang")=="null"){
      this.lan=1
    }
    setTimeout(() => {if(sessionStorage.getItem("view")=="null"||sessionStorage.getItem("view")==null){
     
      localStorage.setItem("view","1")
      
    }
    else{
      this.onDisplayModeChange(+sessionStorage.getItem("view"))
    }
    
    
    // this.displayMode=+localStorage.getItem("view")
     var checkBoxFirst= document.getElementById("flexCheckChecked2") as HTMLInputElement
    this.contactusService.getContatcus().subscribe(data=>{
      this.contactus=data
      if(sessionStorage.getItem("sortForName")==null){
        if(localStorage.getItem("sortForName")=="true"){
          sortForName.checked=true
          this.sortForName()
        }
        else{
          sortForName.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForName")=="true")
       {
      
        
        sortForName.checked=true
        
        this.sortForName()
       }
       else{
        sortForName.checked=false
       }

       if(sessionStorage.getItem("sortForNameReverse")==null){
        if(localStorage.getItem("sortForNameReverse")=="true"){
          sortForNameReverse.checked=true
          this.sortForNameReverse()
        }
        else{
          sortForNameReverse.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForNameReverse")=="true")
       {
        
        sortForNameReverse.checked=true
        
        this.sortForNameReverse()
       }
       else{
        sortForNameReverse.checked=false
       }

       if(sessionStorage.getItem("sortForEmail")==null){
        if(localStorage.getItem("sortForEmail")=="true"){
          sortForEmail.checked=true
          this.sortForEmail()
        }
        else{
          sortForEmail.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForEmail")=="true")
       {
        
        sortForEmail.checked=true
        
        this.sortForEmail()
       }
       else{
        sortForEmail.checked=false
       }

       if(sessionStorage.getItem("sortForMessage")==null){
        if(localStorage.getItem("sortForMessage")=="true"){
          sortForMessage.checked=true
          this.sortForMessage()
        }
        else{
          sortForMessage.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForMessage")=="true")
       {
     
        
        sortForMessage.checked=true
        
        this.sortForMessage()
       }
       else{
        sortForMessage.checked=false
       }
   
    })
    var sortForName= document.getElementById("sortForName") as HTMLInputElement
    var sortForNameReverse= document.getElementById("sortForNameReverse") as HTMLInputElement
    var sortForEmail= document.getElementById("sortForEmail") as HTMLInputElement
    var sortForMessage= document.getElementById("sortForMessage") as HTMLInputElement
    this.filterText=localStorage.getItem("searchBox")},50)
    
  }
  addToCart(contactus:string){
    this.AlertifyService.success(contactus+" Added")
  }
  sortForName() {
    var checkBox= document.getElementById("sortForName") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox3= document.getElementById("sortForEmail") as HTMLInputElement
    var checkBox4= document.getElementById("sortForMessage") as HTMLInputElement
    if(checkBox.checked){
      this.contactus.sort((a, b) => a.name.localeCompare(b.name));
      sessionStorage.setItem("sortForName","true")
      sessionStorage.setItem("sortForNameReverse","false")
      sessionStorage.setItem("sortForEmail","false")
      sessionStorage.setItem("sortForMessage","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForName","false")
      window.location.reload()
      
    }
    
  }
  sortForNameReverse() {
    var checkBox= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox2= document.getElementById("sortForName") as HTMLInputElement
    var checkBox3= document.getElementById("sortForEmail") as HTMLInputElement
    var checkBox4= document.getElementById("sortForMessage") as HTMLInputElement
    if(checkBox.checked){
    this.contactus.sort((b, a) => a.name.localeCompare(b.name));
    sessionStorage.setItem("sortForNameReverse","true")
    sessionStorage.setItem("sortForName","false")
      
      sessionStorage.setItem("sortForEmail","false")
      sessionStorage.setItem("sortForMessage","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForNameReverse","false")
      window.location.reload()
      
    }
  }
  sortForEmail() {
    var checkBox= document.getElementById("sortForEmail") as HTMLInputElement
    var checkBox2= document.getElementById("sortForName") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox4= document.getElementById("sortForMessage") as HTMLInputElement
    if(checkBox.checked){
    this.contactus.sort((a, b) => a.email.localeCompare(b.email));
    sessionStorage.setItem("sortForEmail","true")
    sessionStorage.setItem("sortForName","false")
      
      sessionStorage.setItem("sortForNameReverse","false")
      sessionStorage.setItem("sortForMessage","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForEmail","false")
      window.location.reload()
      
    }
  }

  sortForMessage() {
    var checkBox= document.getElementById("sortForMessage") as HTMLInputElement
    var checkBox2= document.getElementById("sortForName") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox4= document.getElementById("sortForEmail") as HTMLInputElement
    if(checkBox.checked){
    this.contactus.sort((a, b) => a.message.localeCompare(b.message));
    sessionStorage.setItem("sortForMessage","true")
    sessionStorage.setItem("sortForName","false")
      
      sessionStorage.setItem("sortForNameReverse","false")
      sessionStorage.setItem("sortForEmail","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForEmail","false")
      window.location.reload()
      
    }
  }
  onDisplayModeChange(mode: number=1): void {
    this.displayMode = mode;
    sessionStorage.setItem("view",mode.toString())
  }
  saveOptions(){
    var viewValue=sessionStorage.getItem("view")
    localStorage.setItem("view",viewValue)
    var search= document.getElementById("productName") as HTMLInputElement
    localStorage.setItem("searchBox",search.value)
    var checkBox= document.getElementById("flexCheckChecked2") as HTMLInputElement
    var stockValue=sessionStorage.getItem("stockValue")
    localStorage.setItem("stockValue",stockValue)
    
    localStorage.setItem("sortForName",sessionStorage.getItem("sortForName"))
    localStorage.setItem("sortForNameReverse",sessionStorage.getItem("sortForNameReverse"))
    localStorage.setItem("sortForEmail",sessionStorage.getItem("sortForEmail"))
    localStorage.setItem("sortForMessage",sessionStorage.getItem("sortForMessage"))
    
  }
  clearOptions(){
    sessionStorage.removeItem("sortForName")
    sessionStorage.removeItem("sortForNameReverse")
    sessionStorage.removeItem("sortForEmail")
    sessionStorage.removeItem("sortForMessage")
    sessionStorage.removeItem("view")
    localStorage.removeItem("sortForName")
    localStorage.removeItem("sortForNameReverse")
    localStorage.removeItem("sortForEmail")
    localStorage.removeItem("sortForMessage")
    localStorage.removeItem("view")
    localStorage.removeItem("searchBox")
    window.location.reload()
  }
  addContact(){
    
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    
    var name= document.getElementById("addNameInput") as HTMLInputElement
    var phone= document.getElementById("addPhoneInput") as HTMLInputElement
    var email= document.getElementById("addEmailInput") as HTMLInputElement
    var message= document.getElementById("addMessageInput") as HTMLInputElement
    
      const body={name:name.value,phone:phone.value,email:email.value,message:message.value}

    this.http.post<Contactus>(this.path,body, httpOptions).subscribe(data=>{
      this.AlertifyService.success(data.name+" Added")
      window.location.reload()
   })
  }
  message(temp:Contactus){
    var phone=""
    var message=""
    const body={phone:temp.phone,message:temp.message}
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json; charset=utf-8',
        'authorization':'Token',
        'Access-Control-Allow-Origin':' *'
      })
    }
    this.http.post("https://api.whatsapp.com/send",body,httpOptions).subscribe(data=>{

    })
  }
}
