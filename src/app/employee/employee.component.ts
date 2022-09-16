import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../Models/Employees';
declare let http:any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,private employeeService:EmployeeService,private http:HttpClient) { }
  title="Product List"
  filterText=""
  employeetemp:Employee | undefined;
  employees:Employee[] = [];
  path="http://localhost:3030/api/employees"
  displayMode:number=1
  lan:number=+sessionStorage.getItem("lang")
  ngOnInit(): void {
    if(sessionStorage.getItem("lang")==null||sessionStorage.getItem("lang")=="null"){
      this.lan=1
    }
    setTimeout(() => {if(sessionStorage.getItem("view")=="null"||sessionStorage.getItem("view")==null){
      console.log("aflas")
      localStorage.setItem("view","1")
      
    }
    else{
      this.onDisplayModeChange(+sessionStorage.getItem("view"))
    }
    this.employeeService.getEmployees().subscribe(data=>{3
      this.employees=data
      var date=this.employees[0].birthDate
      const date2=new Date(date)
      console.log(date2)
      if(sessionStorage.getItem("sortForNameEmployee")==null){
        if(localStorage.getItem("sortForNameEmployee")=="true"){
          sortForName.checked=true
          this.sortForName()
        }
        else{
          sortForName.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForNameEmployee")=="true")
       {
        console.log("burda")
        
        sortForName.checked=true
        
        this.sortForName()
       }
       else{
        sortForName.checked=false
       }

       if(sessionStorage.getItem("sortForNameReverseEmployee")==null){
        if(localStorage.getItem("sortForNameReverseEmployee")=="true"){
          sortForNameReverseEmployee.checked=true
          this.sortForNameReverse()
        }
        else{
          sortForNameReverseEmployee.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForNameReverseEmployee")=="true")
       {
        console.log("burda")
        
        sortForNameReverseEmployee.checked=true
        
        this.sortForNameReverse()
       }
       else{
        sortForNameReverseEmployee.checked=false
       }

       if(sessionStorage.getItem("sortForTitle")==null){
        if(localStorage.getItem("sortForTitle")=="true"){
          sortForTitle.checked=true
          this.sortForTitle()
        }
        else{
          sortForTitle.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForTitle")=="true")
       {
        console.log("burda")
        
        sortForTitle.checked=true
        
        this.sortForTitle()
       }
       else{
        sortForTitle.checked=false
       }

       if(sessionStorage.getItem("sortForTitleReverse")==null){
        if(localStorage.getItem("sortForTitleReverse")=="true"){
          sortForTitleReverse.checked=true
          this.sortForTitleReverse()
        }
        else{
          sortForTitleReverse.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForTitleReverse")=="true")
       {
        console.log("burda")
        
        sortForTitleReverse.checked=true
        
        this.sortForTitleReverse()
       }
       else{
        sortForTitleReverse.checked=false
       }
       if(sessionStorage.getItem("sortForBirthDate")==null){
        if(localStorage.getItem("sortForBirthDate")=="true"){
          sortForBirthDate.checked=true
          this.sortForBirthDate()
        }
        else{
          sortForBirthDate.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForBirthDate")=="true")
       {
        console.log("burda")
        
        sortForBirthDate.checked=true
        
        this.sortForBirthDate()
       }
       else{
        sortForBirthDate.checked=false
       }
       if(sessionStorage.getItem("sortForCountry")==null){
        if(localStorage.getItem("sortForCountry")=="true"){
          sortForCountry.checked=true
          this.sortForCountry()
        }
        else{
          sortForCountry.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForCountry")=="true")
       {
        console.log("burda")
        
        sortForCountry.checked=true
        
        this.sortForCountry()
       }
       else{
        sortForCountry.checked=false
       }
       if(sessionStorage.getItem("sortForCountry")==null){
        if(localStorage.getItem("sortForCountry")=="true"){
          sortForCountry.checked=true
          this.sortForCountry()
        }
        else{
          sortForCountry.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForCountry")=="true")
       {
        console.log("burda")
        
        sortForCountry.checked=true
        
        this.sortForCountry()
       }
       else{
        sortForCountry.checked=false
       }
    })
    var sortForName= document.getElementById("sortForNameEmployee") as HTMLInputElement
  
   var sortForNameReverseEmployee= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var sortForTitle= document.getElementById("sortForTitle") as HTMLInputElement
    var sortForTitleReverse= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var sortForBirthDate= document.getElementById("sortForBirthDate") as HTMLInputElement
    var sortForCountry= document.getElementById("sortForCountry") as HTMLInputElement
    var sortForCity= document.getElementById("sortForCity") as HTMLInputElement
   this.filterText=localStorage.getItem("searchBox")},50)
    
  }
  delete(employee:Employee){
    if(sessionStorage.getItem("lang")=="1"){
      this.alertifyService.confirm(employee.firstName+ " Çalışanı silmek üzeresiniz","Emin misiniz?",()=>{
        this.employeeService.deleteEmployees(employee).subscribe(data=>{})
        window.location.reload();
      }, ()=>{ this.alertifyService.error('İptal Edildi')}
      )
    }
    else{
      this.alertifyService.confirm(employee.firstName+ " You are about to delete the Employee","Are you sure?",()=>{
        this.employeeService.deleteEmployees(employee).subscribe(data=>{})
        window.location.reload();
      }, ()=>{ this.alertifyService.error('Cancel')}
      )
    }
    }
    showDetails(employee: Employee) {
      if(sessionStorage.getItem("lang")=="1"){
        this.alertifyService.alert(employee.firstName+employee.lastName, "Ünvan: " + employee.title+ "    <br> Ülke: " + employee.country+ "<br> Şehir: "+employee.city+ "<br> Doğum Tarihi: "+employee.birthDate,
        () => {


        });
      } 
        else{
          this.alertifyService.alert(employee.firstName+employee.lastName, "Title: " + employee.title+ "    <br> Country: " + employee.country+ "<br> City: "+employee.city+ "<br> Birth Date: "+employee.birthDate,
                () => {


                });
        }
      
      }
      showUpdate(employee:Employee){
        this.employeetemp=employee
        console.log(this.employeetemp)
        return this.employeetemp
      }
      update(){
        const httpOptions={
          headers:new HttpHeaders({
            'Content-Type':'application/json',
            'authorization':'Token'
          })
        }
        
        console.log(this.employeetemp)
        var firstName= document.getElementById("employeeFirstnameInput") as HTMLInputElement
        if(firstName.value==""){
          firstName.value=this.employeetemp.firstName
        }
        var lastName= document.getElementById("employeeLastnameInput") as HTMLInputElement
        
        if(lastName.value==""){
          lastName.value=this.employeetemp.lastName.toString();
        }
        
        var title= document.getElementById("employeeTitleInput") as HTMLInputElement
        if(title.value==""){
          title.value=this.employeetemp.title.toString();
        }
        console.log(title.value)
        var country= document.getElementById("employeeCountryInput") as HTMLInputElement
        if(country.value==""){
          country.value=this.employeetemp.country;
        }
        var city= document.getElementById("employeeCityInput") as HTMLInputElement
        if(city.value==""){
          city.value=this.employeetemp.city;
        }
        var birthDate= document.getElementById("employeeBirthDateInput") as HTMLInputElement
        if(birthDate.value==""){
          birthDate.value=this.employeetemp.birthDate;
        }
        
        
          const body={firstName:firstName.value,lastName:lastName.value,title:title.value,country:country.value,city:city.value,birthDate:birthDate.value}
          console.log(body)
          this.http.put<Employee>(this.path+"/"+this.employeetemp.id,body, httpOptions).subscribe(data=>{
            if(sessionStorage.getItem("lang")=="1"){
              this.alertifyService.success(data.firstName+" Güncellendi")
            }
          else{
            this.alertifyService.success(data.firstName+" Updated")
          }
       })
      }
  addToCart(employee:string){
    this.alertifyService.success(employee+" Added")
  }

  sortForName() {
    var checkBox= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox5= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox6= document.getElementById("sortForCountry") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCity") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
      sessionStorage.setItem("sortForNameEmployee","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForTitle","false")
      sessionStorage.setItem("sortForTitleReverse","false")
      sessionStorage.setItem("sortForBirthDate","false")
      sessionStorage.setItem("sortForCountry","false")
      sessionStorage.setItem("sortForCity","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForNameEmployee","false")
      window.location.reload()
      
    }
    
  }
  sortForNameReverse() {
    var checkBox= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox5= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox6= document.getElementById("sortForCountry") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCity") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((b, a) => a.firstName.localeCompare(b.firstName));
      sessionStorage.setItem("sortForNameReverseEmployee","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForTitle","false")
      sessionStorage.setItem("sortForTitleReverse","false")
      sessionStorage.setItem("sortForBirthDate","false")
      sessionStorage.setItem("sortForCountry","false")
      sessionStorage.setItem("sortForCity","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      window.location.reload()
      
    }
    
  }
  sortForTitle() {
    var checkBox= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox5= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox6= document.getElementById("sortForCountry") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCity") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((a, b) => a.title.localeCompare(b.title));
      sessionStorage.setItem("sortForTitle","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForNameEmployee","false")
      sessionStorage.setItem("sortForTitleReverse","false")
      sessionStorage.setItem("sortForBirthDate","false")
      sessionStorage.setItem("sortForCountry","false")
      sessionStorage.setItem("sortForCity","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForTitle","false")
      window.location.reload()
      
    }
    
  }
  sortForTitleReverse() {
    var checkBox= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox5= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox6= document.getElementById("sortForCountry") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCity") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((b, a) => a.title.localeCompare(b.title));
      sessionStorage.setItem("sortForTitleReverse","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForNameEmployee","false")
      sessionStorage.setItem("sortForTitle","false")
      sessionStorage.setItem("sortForBirthDate","false")
      sessionStorage.setItem("sortForCountry","false")
      sessionStorage.setItem("sortForCity","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForTitleReverse","false")
      window.location.reload()
      
    }
    
  }
  sortForBirthDate() {
    var checkBox= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox5= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox6= document.getElementById("sortForCountry") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCity") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((a, b) => a.birthDate.localeCompare(b.birthDate));
      sessionStorage.setItem("sortForBirthDate","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForNameEmployee","false")
      sessionStorage.setItem("sortForTitle","false")
      sessionStorage.setItem("sortForTitleReverse","false")
      sessionStorage.setItem("sortForCountry","false")
      sessionStorage.setItem("sortForCity","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForBirthDate","false")
      window.location.reload()
      
    }
    
  }
  sortForCountry() {
    var checkBox= document.getElementById("sortForCountry") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox5= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox6= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCity") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((a, b) => a.country.localeCompare(b.country));
      sessionStorage.setItem("sortForCountry","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForNameEmployee","false")
      sessionStorage.setItem("sortForTitle","false")
      sessionStorage.setItem("sortForTitleReverse","false")
      sessionStorage.setItem("sortForBirthDate","false")
      sessionStorage.setItem("sortForCity","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForCountry","false")
      window.location.reload()
      
    }
    
  }
  sortForCity() {
    var checkBox= document.getElementById("sortForCity") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameEmployee") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseEmployee") as HTMLInputElement
    var checkBox4= document.getElementById("sortForTitle") as HTMLInputElement
    var checkBox5= document.getElementById("sortForTitleReverse") as HTMLInputElement
    var checkBox6= document.getElementById("sortForBirthDate") as HTMLInputElement
    var checkBox7= document.getElementById("sortForCountry") as HTMLInputElement
    if(checkBox.checked){
      
      this.employees.sort((a, b) => a.city.localeCompare(b.city));
      sessionStorage.setItem("sortForCity","true")
      sessionStorage.setItem("sortForNameReverseEmployee","false")
      sessionStorage.setItem("sortForNameEmployee","false")
      sessionStorage.setItem("sortForTitle","false")
      sessionStorage.setItem("sortForTitleReverse","false")
      sessionStorage.setItem("sortForBirthDate","false")
      sessionStorage.setItem("sortForCountry","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      checkBox5.checked=false
      checkBox6.checked=false
      checkBox7.checked=false
    }
    else{
      sessionStorage.setItem("sortForCity","false")
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
   
    
    
    localStorage.setItem("sortForNameEmployee",sessionStorage.getItem("sortForNameEmployee"))
    localStorage.setItem("sortForNameReverseEmployee",sessionStorage.getItem("sortForNameReverseEmployee"))
    localStorage.setItem("sortForTitle",sessionStorage.getItem("sortForTitle"))
    localStorage.setItem("sortForTitleReverse",sessionStorage.getItem("sortForTitleReverse"))
    localStorage.setItem("sortForBirthDate",sessionStorage.getItem("sortForBirthDate"))
    localStorage.setItem("sortForCountry",sessionStorage.getItem("sortForCountry"))
    localStorage.setItem("sortForCity",sessionStorage.getItem("sortForCity"))
    
  }
  clearOptions(){
    sessionStorage.removeItem("sortForNameEmployee")
    sessionStorage.removeItem("sortForNameReverseEmployee")
    sessionStorage.removeItem("sortForTitle")
    sessionStorage.removeItem("sortForTitleReverse")
    sessionStorage.removeItem("sortForBirthDate")
    sessionStorage.removeItem("sortForCountry")
    sessionStorage.removeItem("sortForCity")
    sessionStorage.removeItem("view")
    localStorage.removeItem("sortForNameEmployee")
    localStorage.removeItem("sortForNameReverseEmployee")
    localStorage.removeItem("sortForTitle")
    localStorage.removeItem("sortForTitleReverse")
    localStorage.removeItem("sortForBirthDate")
    localStorage.removeItem("sortForCountry")
    localStorage.removeItem("sortForCity")
    localStorage.removeItem("view")
    localStorage.removeItem("searchBox")
    window.location.reload()
  }
  addEmployee(){

    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token '
      })
    }
    
    
    var firstName= document.getElementById("addemployeeFirstNameInput") as HTMLInputElement
    console.log(firstName)
    var lastName= document.getElementById("addemployeeLastNameInput") as HTMLInputElement
    
    
    
    var title= document.getElementById("addemployeeTitleInput") as HTMLInputElement
   
    console.log(title.value)
    var country= document.getElementById("addemployeeCountryInput") as HTMLInputElement
    
    var city= document.getElementById("addemployeeCityInput") as HTMLInputElement
    
    var birthDate= document.getElementById("addemployeeBirthDateInput") as HTMLInputElement
    
    var imageName= document.getElementById("addImageInput") as HTMLInputElement
    
      var body={firstName:firstName.value,lastName:lastName.value,title:title.value,country:country.value,city:city.value,birthDate:birthDate.value,imageName:imageName.value}
    

    
    
    
      
      console.log(body)
    this.http.post<Employee>(this.path,body, httpOptions).subscribe(data=>{
      this.alertifyService.success(data.firstName+" added")
      
   })
  }
}
