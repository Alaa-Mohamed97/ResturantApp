import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getCartItem(id){
    
    return this.http.get<any>(environment.apiBasicUrl+"ShoppingCart/GetCartItems?="+id);
  }
  orderNow(val:any){
   
    return this.http.post(environment.apiBasicUrl+"ShoppingCart/OrderNow",val);
  }
  confirmorder(val:any){
    return this.http.post(environment.apiBasicUrl+"ShoppingCart/ConfirmOrder",val);
    
  }

  getmenu(){
    return this.http.get<any>(environment.apiBasicUrl+"items/Menu");
  }
  getCusotmerCartCount(id){
    
    return this.http.get<any>(environment.apiBasicUrl+"ShoppingCart/GetCustomerCartCoun?="+id);
  }
  
  plus(id){
    
    return this.http.get<any>(environment.apiBasicUrl+"ShoppingCart/plus?="+id)
  }
  minus(id){
    return this.http.get(environment.apiBasicUrl+"ShoppingCart/minus?="+id)
  }
  delete(id){
    return this.http.delete(environment.apiBasicUrl+"ShoppingCart/DeleteShopincartitem?="+id)
  }
}
