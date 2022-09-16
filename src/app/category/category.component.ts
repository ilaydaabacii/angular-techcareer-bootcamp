import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../Models/Categories';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
  
})

export class CategoryComponent implements OnInit {

  constructor(private AlertifyService:AlertifyService, private http:HttpClient,private accountService:AccountService) { }
  title="Product List"
  filterText=""
  categories:Category[]= [];
  categoryTemp:Category;
  path="http://localhost:3030/api/categories"
  tokenType  = 'Bearer ';
  displayMode:number=1
  lan:number=+sessionStorage.getItem("lang")
  username=sessionStorage.getItem("isLoggedIn")

  httpOptions={
    headers:new HttpHeaders({
      'Authorization': "Bearer "+sessionStorage.getItem(this.username)
    })
  }
  ngOnInit(): void {
    if(sessionStorage.getItem("lang")==null||sessionStorage.getItem("lang")=="null"){
      this.lan=1
    }
    setTimeout(() => {
      this.username=sessionStorage.getItem("isLoggedIn")
    // httpOptions=setHttpOptions();
    if(sessionStorage.getItem("view")=="null"||sessionStorage.getItem("view")==null){
      localStorage.setItem("view","1")
      
    }
    else{
      this.onDisplayModeChange(+sessionStorage.getItem("view"))
    }
     var checkBoxFirst= document.getElementById("flexCheckChecked2") as HTMLInputElement
    this.http.get<Category[]>(this.path, this.httpOptions).subscribe(data=>{
      this.categories=data
      if(sessionStorage.getItem("sortForNameCategory")==null){
        if(localStorage.getItem("sortForNameCategory")=="true"){
          sortForName.checked=true
          this.sortForName()
        }
        else{
          sortForName.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForNameCategory")=="true")
       {
      
        sortForName.checked=true
        
        this.sortForName()
       }
       else{
        sortForName.checked=false
       }

       if(sessionStorage.getItem("sortForNameReverseCategory")==null){
        if(localStorage.getItem("sortForNameReverseCategory")=="true"){
          sortForNameReverse.checked=true
          this.sortForNameReverse()
        }
        else{
          sortForNameReverse.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForNameReverseCategory")=="true")
       {
      
        
        sortForNameReverse.checked=true
        
        this.sortForNameReverse()
       }
       else{
        sortForNameReverse.checked=false
       }

       if(sessionStorage.getItem("sortForDescription")==null){
        if(localStorage.getItem("sortForDescription")=="true"){
          sortForDescription.checked=true
          this.sortForDescription()
        }
        else{
          sortForDescription.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForDescription")=="true")
       {

        
        sortForDescription.checked=true
        
        this.sortForDescription()
       }
       else{
        sortForDescription.checked=false
       }

       if(sessionStorage.getItem("sortForDescriptionReverse")==null){
        if(localStorage.getItem("sortForDescriptionReverse")=="true"){
          sortForDescriptionReverse.checked=true
          this.sortForDescriptionReverse()
        }
        else{
          sortForDescriptionReverse.checked=false
        }
        
       }
       else if(sessionStorage.getItem("sortForDescriptionReverse")=="true")
       {
        
        sortForDescriptionReverse.checked=true
        
        this.sortForDescriptionReverse()
       }
       else{
        sortForDescriptionReverse.checked=false
       }
    })
    var sortForName= document.getElementById("sortForNameCategory") as HTMLInputElement
    var sortForNameReverse= document.getElementById("sortForNameReverseCategory") as HTMLInputElement
    var sortForDescription= document.getElementById("sortForDescription") as HTMLInputElement
    var sortForDescriptionReverse= document.getElementById("sortForDescriptionReverse") as HTMLInputElement
    this.filterText=localStorage.getItem("searchBox")
    },50)
    
  }
 
  delete(category:Category){
    if(sessionStorage.getItem("lang")=="1"){
      this.AlertifyService.confirm(category.name+ "Kategoriyi silmek üzeresiniz","Emin misiniz?",()=>{
        this.http.delete<Category>(this.path+"/"+category.id,this.httpOptions).subscribe(data=>{})
        window.location.reload();
      }, ()=>{ this.AlertifyService.error('İptal Edildi')})
    }
   else{
    this.AlertifyService.confirm(category.name+ " You are about to delete the category","Are you sure?",()=>{
      this.http.delete<Category>(this.path+"/"+category.id,this.httpOptions).subscribe(data=>{})
      window.location.reload();
    }, ()=>{ this.AlertifyService.error('Cancel')})
   }
  }
  showUpdate(category:Category){
    this.categoryTemp=category
    return this.categoryTemp
  }
  showDetails(category: Category) {
    if(sessionStorage.getItem("lang")=="1"){
      this.AlertifyService.alertCategory(category.name, "Açıklama: " + category.description.toString() ,
      () => {});
    }
    else{
      this.AlertifyService.alertCategory(category.name, "Description: " + category.description.toString() ,
      () => {});
    }
  }
  updateCategory(){
    const httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+sessionStorage.getItem(this.username)
      })
    }
    

    var name= document.getElementById("categoryNameInput") as HTMLInputElement
    if(name.value==""){
      name.value=this.categoryTemp.name
    }
    var description= document.getElementById("categoryDescriptionInput") as HTMLInputElement
    if(description.value==""){
      description.value=this.categoryTemp.description;
    }
    
    
    
      const body={name:name.value,description:description.value}
    this.http.put<Category>(this.path+"/"+this.categoryTemp.id,body, httpOption).subscribe(data=>{
      if(sessionStorage.getItem("lang")=="1"){
        this.AlertifyService.success(data.name+" başarıyla güncellendi")
      }
      else{
        this.AlertifyService.success(data.name+" Updated")
      }
     
   })
  } 
  
  addToCart(category:string){
    this.AlertifyService.success(category+" Added")
  }

  sortForName() {
    var checkBox= document.getElementById("sortForNameCategory") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameReverseCategory") as HTMLInputElement
    var checkBox3= document.getElementById("sortForDescription") as HTMLInputElement
    var checkBox4= document.getElementById("sortForDescriptionReverse") as HTMLInputElement
    if(checkBox.checked){
    
      this.categories.sort((a, b) => a.name.localeCompare(b.name));
      sessionStorage.setItem("sortForNameCategory","true")
      sessionStorage.setItem("sortForNameReverseCategory","false")
      sessionStorage.setItem("sortForDescription","false")
      sessionStorage.setItem("sortForDescriptionReverse","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForNameCategory","false")
      window.location.reload()
      
    }
    
  }
  sortForNameReverse() {
    var checkBox= document.getElementById("sortForNameReverseCategory") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameCategory") as HTMLInputElement
    var checkBox3= document.getElementById("sortForDescription") as HTMLInputElement
    var checkBox4= document.getElementById("sortForDescriptionReverse") as HTMLInputElement
    if(checkBox.checked){
    this.categories.sort((b, a) => a.name.localeCompare(b.name));
      sessionStorage.setItem("sortForNameReverseCategory","true")
      sessionStorage.setItem("sortForNameCategory","false")
      sessionStorage.setItem("sortForDescription","false")
      sessionStorage.setItem("sortForDescriptionReverse","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForNameReverseCategory","false")
      window.location.reload()
      
    }
  }
  sortForDescription() {
    var checkBox= document.getElementById("sortForDescription") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameCategory") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseCategory") as HTMLInputElement
    var checkBox4= document.getElementById("sortForDescriptionReverse") as HTMLInputElement
    if(checkBox.checked){
    this.categories.sort((a, b) => a.description.localeCompare(b.description));
      sessionStorage.setItem("sortForDescription","true")
      sessionStorage.setItem("sortForNameCategory","false")
      sessionStorage.setItem("sortForNameReverseCategory","false")
      sessionStorage.setItem("sortForDescriptionReverse","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForDescription","false")
      window.location.reload()
      
    }
  }
  sortForDescriptionReverse() {
    var checkBox= document.getElementById("sortForDescriptionReverse") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameCategory") as HTMLInputElement
    var checkBox3= document.getElementById("sortForNameReverseCategory") as HTMLInputElement
    var checkBox4= document.getElementById("sortForDescription") as HTMLInputElement
    if(checkBox.checked){
    this.categories.sort((b, a) => a.description.localeCompare(b.description));
      sessionStorage.setItem("sortForDescriptionReverse","true")
      sessionStorage.setItem("sortForNameCategory","false")
      sessionStorage.setItem("sortForNameReverseCategory","false")
      sessionStorage.setItem("sortForDescription","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForDescriptionReverse","false")
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
    localStorage.setItem("sortForNameCategory",sessionStorage.getItem("sortForNameCategory"))
    localStorage.setItem("sortForNameReverseCategory",sessionStorage.getItem("sortForNameReverseCategory"))
    localStorage.setItem("sortForDescription",sessionStorage.getItem("sortForDescription"))
    localStorage.setItem("sortForDescriptionReverse",sessionStorage.getItem("sortForDescriptionReverse"))
    
  }
  clearOptions(){
    sessionStorage.removeItem("sortForNameCategory")
    sessionStorage.removeItem("sortForNameReverseCategory")
    sessionStorage.removeItem("sortForDescription")
    sessionStorage.removeItem("sortForDescriptionReverse")
    sessionStorage.removeItem("view")
    localStorage.removeItem("sortForNameCategory")
    localStorage.removeItem("sortForNameReverseCategory")
    localStorage.removeItem("sortForDescription")
    localStorage.removeItem("sortForDescriptionReverse")
    localStorage.removeItem("view")
    localStorage.removeItem("searchBox")
    window.location.reload()
  }
  addCategory(){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Bearer '+sessionStorage.getItem(this.username)
      })
    }
    
    var name= document.getElementById("addNameInput") as HTMLInputElement
    var description= document.getElementById("addDescriptionInput") as HTMLInputElement
    var imageName= document.getElementById("addImageInput") as HTMLInputElement
      const body={name:name.value,description:description.value,imageName:imageName.value}
    this.http.post<Category>(this.path,body, httpOptions).subscribe(data=>{
      this.AlertifyService.success(data.name+" Added")
      window.location.reload()
   })
  }
}
