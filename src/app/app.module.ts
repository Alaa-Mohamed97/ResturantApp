import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { HomeComponent } from './user-area/home/home.component';
import { CategoryComponent } from './category/category.component';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { ShoppingCartComponent } from './user-area/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './user-area/menu/menu.component';
import { UserProfileComponent } from './user-area/user-profile/user-profile.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { ItemDetailesComponent } from './item-detailes/item-detailes.component';
//import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AddEditItemComponent,
    HomeComponent,
    CategoryComponent,
    AddEditCategoryComponent,
    ShoppingCartComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    UserProfileComponent,
    CustomerComponent,
    CustomerOrdersComponent,
    ItemDetailesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   // MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
