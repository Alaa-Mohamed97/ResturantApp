import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerorderslist:any=[];
  ordersOfCustomerList:any=[];
  
  constructor(private http:HttpClient) { }

  getCustomerwithordercount(){
    return this.http.get(environment.apiBasicUrl+"Customer/GetCustomerWithOrders").toPromise().then(res=>{
      this.customerorderslist=res;
    })
  }

  getOrdersOfCustomer(id){
   
    return this.http.get(environment.apiBasicUrl+"Customer/GetOrdersOfCustomer?id="+id).toPromise().then(res=>{
      this.ordersOfCustomerList=res ;
      
    })
  }


  registercustomer(val){
    return this.http.post(environment.apiBasicUrl+"Customer/Register",val);

  }
  login(val){
    return this.http.post(environment.apiBasicUrl+"Customer/Login",val);

  }
  editUserName(val){
    return this.http.post(environment.apiBasicUrl+"Customer/EditUserName",val)
  }
  changePassword(val){
    return this.http.post(environment.apiBasicUrl+"Customer/changePassword",val)
  }
}
