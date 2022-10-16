import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() address: string;
  username: string;

  cartList: any = [];
  totalprice = 0;
  indecator=0;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {

    var customer = JSON.parse(localStorage.getItem('customer'));

    if (customer != null) {
      var loginUserId = customer.customerId;

      return this.service.getCartItem(loginUserId).subscribe(data => {
        this.cartList = data;
        if (this.cartList != "") {
          this.totalprice = 0;
          for (let index = 0; index < data.length; index++) {

            this.totalprice += data[index].price * data[index].quantity;
            this.indecator=index+ 1;
          }
        }
        
      })

    } else {
      this.router.navigate(['/login']);
    }
  }

  saveorder() {
    var customer = JSON.parse(localStorage.getItem('customer'));
    var id = customer.customerId;
    var orderval = { address: this.address, customerId: id, userName: this.username, gtotal: this.totalprice, orderitems: this.cartList }

    this.service.confirmorder(orderval).subscribe(data => {
      var cartcount = document.getElementById("cartcount");
      cartcount.innerHTML = "0";
      this.loadCart();
    })

  }

  minus(id) {
    this.service.minus(id).subscribe(data => {
      this.loadCart();
    });
  }
  plus(id) {

    this.service.plus(id).subscribe(data => {
      this.loadCart();
    });
  }
  delete(id) {
    if (confirm('Are you sure?')) {

      this.service.delete(id).subscribe(data => {
        this.loadCart();
        //start get customer cart count
        var customer = JSON.parse(localStorage.getItem('customer'));
        var custId = customer.customerId;
        this.service.getCusotmerCartCount(custId).subscribe(res => {
          var cartcount = document.getElementById("cartcount");
          cartcount.innerHTML = res;
        })
        //end get customer cart count
      })
    }
  }
}

