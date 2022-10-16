import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:CustomerService) { }

  ngOnInit() {
    this.loadCustomer();
  }

  loadCustomer(){
    return this.service.getCustomerwithordercount();
  }
}
