import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  constructor(private service:CustomerService) { }

  ngOnInit() {
    var customer=JSON.parse(localStorage.getItem('customer'));
    var customerid=customer.customerId;
    return this.service.getOrdersOfCustomer(customerid);
  }

 
}
