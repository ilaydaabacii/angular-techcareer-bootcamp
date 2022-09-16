import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Models/Products';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
let alertify:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private AlertifyService: AlertifyService, private productService: ProductService, private http:HttpClient) { }
  title = "Product List"
  filterText = ""
  products: Product[]=[];
  producttemp:Product;
  displayMode:number=1
  lan:number=+sessionStorage.getItem("lang")
  path="http://localhost:3030/api/products"
  
  ngOnInit(): void {
    if(sessionStorage.getItem("lang")==null||sessionStorage.getItem("lang")=="null"){
      this.lan=1
    }
    setTimeout(() => {
      if(sessionStorage.getItem("view")=="null"||sessionStorage.getItem("view")==null){
      
      localStorage.setItem("view","1")
      
    }
    else{
      this.onDisplayModeChange(+sessionStorage.getItem("view"))
    }
     var checkBoxFirst= document.getElementById("flexCheckChecked2") as HTMLInputElement
     if(sessionStorage.getItem("stockValue")==null){
      
      if(localStorage.getItem("stockValue")=="true"){
        checkBoxFirst.checked=true
      }
      else{
        
        checkBoxFirst.checked=false
      }
      
     }
     else if(sessionStorage.getItem("stockValue")=="true")
     {
      checkBoxFirst.checked=true
     }
     else{
      checkBoxFirst.checked=false
     }
     
    
   
    
    
   if(sessionStorage.getItem("stockValue")==null){
    
    this.productService.getProducts().subscribe(data => {
      if(localStorage.getItem("stockValue")=="false"||localStorage.getItem("stockValue")==null||localStorage.getItem("stockValue")=="null"){
        this.products = data
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

         if(sessionStorage.getItem("sortForPrice")==null){
          if(localStorage.getItem("sortForPrice")=="true"){
            sortForPrice.checked=true
            this.sortForPrice()
          }
          else{
            sortForPrice.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPrice")=="true")
         {
          

          
          sortForPrice.checked=true
          
          this.sortForPrice()
         }
         else{
          sortForPrice.checked=false
         }

         if(sessionStorage.getItem("sortForPriceReverse")==null){
          if(localStorage.getItem("sortForPriceReverse")=="true"){
            sortForPriceReverse.checked=true
            this.sortForPriceReverse()
          }
          else{
            sortForPriceReverse.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPriceReverse")=="true")
         {
          
          
          sortForPriceReverse.checked=true
          
          this.sortForPriceReverse()
         }
         else{
          sortForPriceReverse.checked=false
         }
      }
      else{
        for(let i=0;i<data.length;i++){
          if(data[i].stock<10){
            
            var iter=0
            this.products.push(data[i])
            
            iter+=1
            
          }
          
        }
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

         if(sessionStorage.getItem("sortForPrice")==null){
          if(localStorage.getItem("sortForPrice")=="true"){
            sortForPrice.checked=true
            this.sortForPrice()
          }
          else{
            sortForPrice.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPrice")=="true")
         {
          
          
          sortForPrice.checked=true
          
          this.sortForPrice()
         }
         else{
          sortForPrice.checked=false
         }

         if(sessionStorage.getItem("sortForPriceReverse")==null){
          if(localStorage.getItem("sortForPriceReverse")=="true"){
            sortForPriceReverse.checked=true
            this.sortForPriceReverse()
          }
          else{
            sortForPriceReverse.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPriceReverse")=="true")
         {
         
          
          sortForPriceReverse.checked=true
          
          this.sortForPriceReverse()
         }
         else{
          sortForPriceReverse.checked=false
         }
      }
     
    })

   }
   else{
    this.productService.getProducts().subscribe(data => {
      if(sessionStorage.getItem("stockValue")=="false"||sessionStorage.getItem("stockValue")==null||sessionStorage.getItem("stockValue")=="null"){
        this.products = data
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

         if(sessionStorage.getItem("sortForPrice")==null){
          if(localStorage.getItem("sortForPrice")=="true"){
            sortForPrice.checked=true
            this.sortForPrice()
          }
          else{
            sortForPrice.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPrice")=="true")
         {
          
          
          sortForPrice.checked=true
          
          this.sortForPrice()
         }
         else{
          sortForPrice.checked=false
         }

         if(sessionStorage.getItem("sortForPriceReverse")==null){
          if(localStorage.getItem("sortForPriceReverse")=="true"){
            sortForPriceReverse.checked=true
            this.sortForPriceReverse()
          }
          else{
            sortForPriceReverse.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPriceReverse")=="true")
         {
          
          
          sortForPriceReverse.checked=true
          
          this.sortForPriceReverse()
         }
         else{
          sortForPriceReverse.checked=false
         }
      }
      else{
        for(let i=0;i<data.length;i++){
          if(data[i].stock<10){
        
            var iter=0
            this.products.push(data[i])
            
            iter+=1
            
          }
          
        }
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

         if(sessionStorage.getItem("sortForPrice")==null){
          if(localStorage.getItem("sortForPrice")=="true"){
            sortForPrice.checked=true
            this.sortForPrice()
          }
          else{
            sortForPrice.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPrice")=="true")
         {
         
          
          sortForPrice.checked=true
          
          this.sortForPrice()
         }
         else{
          sortForPrice.checked=false
         }

         if(sessionStorage.getItem("sortForPriceReverse")==null){
          if(localStorage.getItem("sortForPriceReverse")=="true"){
            sortForPriceReverse.checked=true
            this.sortForPriceReverse()
          }
          else{
            sortForPriceReverse.checked=false
          }
          
         }
         else if(sessionStorage.getItem("sortForPriceReverse")=="true")
         {
          
          
          sortForPriceReverse.checked=true
          
          this.sortForPriceReverse()
         }
         else{
          sortForPriceReverse.checked=false
         }
      }
      this.filterText=localStorage.getItem("searchBox")
    })

   }
   var sortForName= document.getElementById("sortForName") as HTMLInputElement
   var sortForNameReverse= document.getElementById("sortForNameReverse") as HTMLInputElement
   var sortForPrice= document.getElementById("sortForPrice") as HTMLInputElement
   var sortForPriceReverse= document.getElementById("sortForPriceReverse") as HTMLInputElement
    //this.products.sort((a, b) => b.name.localeCompare(a.name));
    this.filterText=localStorage.getItem("searchBox")
    
    
    }, 50)
    
    
  }
 
  update(){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    
    
    var name= document.getElementById("productNameInput") as HTMLInputElement
    if(name.value==""){
      name.value=this.producttemp.name
    }
    var price= document.getElementById("productPriceInput") as HTMLInputElement
    if(price.value==""){
      price.value=this.producttemp.price.toString();
    }
    var stock= document.getElementById("productStockInput") as HTMLInputElement
    
    if(stock.value==""){
      stock.value=this.producttemp.stock.toString();
    }
    const body={name:name.value,price:+price.value,stock:+stock.value}
    
    this.http.put<Product>(this.path+"/"+this.producttemp.id,body, httpOptions).subscribe(data=>{
      this.AlertifyService.success(data.name+" başarıyla güncellendi")
   })
  }
  addProduct(){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'authorization':'Token'
      })
    }
    
    
    var name= document.getElementById("addNameInput") as HTMLInputElement
    
    var price= document.getElementById("addPriceInput") as HTMLInputElement
    
    var stock= document.getElementById("addStockInput") as HTMLInputElement
    
    var imageName= document.getElementById("addImageInput") as HTMLInputElement
    

    
    
    
      const body={name:name.value,price:+price.value,stock:+stock.value,imageName:imageName.value}
      

    this.http.post<Product>(this.path,body, httpOptions).subscribe(data=>{
      this.AlertifyService.success(data.name+" başarıyla güncellendi")
      window.location.reload()
   })
  }
  delete(product:Product){
    if(sessionStorage.getItem("lang")=="2"){
      this.AlertifyService.confirm(product.name+ " You are about to delete the category","Are you sure?",()=>{
        this.productService.deleteProducts(product).subscribe(data=>{})
        window.location.reload();
      }, ()=>{ alertify.error('Cancel')}
      )
    }
    else{
      this.AlertifyService.confirm(product.name+ " Ürünü Silmek Üzeresiniz","Emin misiniz?",()=>{
        this.productService.deleteProducts(product).subscribe(data=>{})
        window.location.reload();
      }, ()=>{ alertify.error('İptal edildi')}
      )
    }
   


    
  }
  showUpdate(products:Product){
    this.producttemp=products
   
    return this.producttemp
  }
  addToCart(product: string) {
    this.AlertifyService.success(product + " Added");
   
    // this.sortForName();
  }

  showDetails(product: Product) {
if(sessionStorage.getItem("lang")=="2"){
  this.AlertifyService.alert(product.name, "Price: " + product.price.toString() + "$    <br> Stock: " + product.stock,
  () => {


  });
}
else{
  this.AlertifyService.alert(product.name, "Fiyat: " + product.price.toString() + "$    <br> Stok: " + product.stock,
  () => {


  });
}
    
  }
  closeModal() {
    document.getElementById('modal-1').style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
  

    
  sortForName() {
    var checkBox= document.getElementById("sortForName") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox3= document.getElementById("sortForPrice") as HTMLInputElement
    var checkBox4= document.getElementById("sortForPriceReverse") as HTMLInputElement
    if(checkBox.checked){
     
      this.products.sort((a, b) => a.name.localeCompare(b.name));
      sessionStorage.setItem("sortForName","true")
      sessionStorage.setItem("sortForNameReverse","false")
      sessionStorage.setItem("sortForPrice","false")
      sessionStorage.setItem("sortForPriceReverse","false")
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
    var checkBox3= document.getElementById("sortForPrice") as HTMLInputElement
    var checkBox4= document.getElementById("sortForPriceReverse") as HTMLInputElement
    if(checkBox.checked){
    this.products.sort((b, a) => a.name.localeCompare(b.name));
    sessionStorage.setItem("sortForNameReverse","true")
    sessionStorage.setItem("sortForName","false")
      
      sessionStorage.setItem("sortForPrice","false")
      sessionStorage.setItem("sortForPriceReverse","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForNameReverse","false")
      window.location.reload()
      
    }
  }
  sortForPrice() {
    var checkBox= document.getElementById("sortForPrice") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox3= document.getElementById("sortForName") as HTMLInputElement
    var checkBox4= document.getElementById("sortForPriceReverse") as HTMLInputElement
    if(checkBox.checked){
    this.products.sort((a, b) => a.price-(b.price));
    sessionStorage.setItem("sortForPrice","true")
    sessionStorage.setItem("sortForName","false")
      sessionStorage.setItem("sortForNameReverse","false")
      
      sessionStorage.setItem("sortForPriceReverse","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
    }
    else{
      sessionStorage.setItem("sortForPrice","false")
      window.location.reload()
      
    }
  }
  sortForPriceReverse() {
    var checkBox= document.getElementById("sortForPriceReverse") as HTMLInputElement
    var checkBox2= document.getElementById("sortForNameReverse") as HTMLInputElement
    var checkBox3= document.getElementById("sortForPrice") as HTMLInputElement
    var checkBox4= document.getElementById("sortForName") as HTMLInputElement
    if(checkBox.checked){
    this.products.sort((b, a) => a.price-(b.price));
    sessionStorage.setItem("sortForPriceReverse","true")
    sessionStorage.setItem("sortForName","false")
      sessionStorage.setItem("sortForNameReverse","false")
      sessionStorage.setItem("sortForPrice","false")
      checkBox2.checked=false
      checkBox3.checked=false
      checkBox4.checked=false
      
    }
    else{
      sessionStorage.setItem("sortForPriceReverse","false")
      window.location.reload()
      
    }
  }
  stockValue(){
    
    var checkBox= document.getElementById("flexCheckChecked2") as HTMLInputElement
    
    
    if(checkBox.checked){
      
      sessionStorage.setItem("stockValue","true")
     
    }
    else{
      sessionStorage.setItem("stockValue","false")
    }
     window.location.reload()
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
    localStorage.setItem("sortForPrice",sessionStorage.getItem("sortForPrice"))
    localStorage.setItem("sortForPriceReverse",sessionStorage.getItem("sortForPriceReverse"))
    localStorage.setItem("lang",sessionStorage.getItem("lang"))
    
  }
  clearOptions(){
    sessionStorage.removeItem("sortForName")
    sessionStorage.removeItem("sortForNameReverse")
    sessionStorage.removeItem("sortForPrice")
    sessionStorage.removeItem("sortForPriceReverse")
    sessionStorage.removeItem("view")
    sessionStorage.removeItem("lang")
    localStorage.removeItem("sortForName")
    localStorage.removeItem("sortForNameReverse")
    localStorage.removeItem("sortForPrice")
    localStorage.removeItem("sortForPriceReverse")
    localStorage.removeItem("view")
    localStorage.removeItem("searchBox")
    localStorage.removeItem("lang")
    localStorage.removeItem("stockValue")
    window.location.reload()
  }
}

