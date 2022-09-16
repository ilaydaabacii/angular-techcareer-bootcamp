import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeFilterPipe } from './pipes/employee-filter.pipe';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactusPipe } from './pipes/contactus.pipe';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { SummaryPipe } from './pipes/summary.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    CategoryFilterPipe,
    EmployeeComponent,
    EmployeeFilterPipe,
    ContactusComponent,
    ContactusPipe,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    SummaryPipe
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
    
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
