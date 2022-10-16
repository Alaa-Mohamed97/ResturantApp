import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './user-area/home/home.component';
import { CategoryComponent } from './category/category.component';
import { ShoppingCartComponent } from './user-area/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-area/user-profile/user-profile.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { ItemDetailesComponent } from './item-detailes/item-detailes.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},

  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'categories',component:CategoryComponent},
  {path:'items',component:ItemComponent},
  {path:'shoppingcart',component:ShoppingCartComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'customer',component:CustomerComponent},
  {path:'orderhistory',component:CustomerOrdersComponent},
  {path:'itemdetailes/:id',component:ItemDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
