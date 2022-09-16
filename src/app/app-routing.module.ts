import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeeComponent } from './employee/employee.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'products',component:ProductComponent, canActivate:[LoginGuard]},
  
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'categories',component:CategoryComponent, canActivate:[LoginGuard]},
  {path:'employees',component:EmployeeComponent, canActivate:[LoginGuard]},
  {path:'contactus',component:ContactusComponent, canActivate:[LoginGuard]},
  {path:'index',component:IndexComponent, canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
