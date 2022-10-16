import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/shared/item.service';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { $ } from 'protractor';
//import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() ItemNameFilter:string="";
bg;
bgg=false;
  
  
  constructor(private service:ItemService,private userservice:UserService,
    private router:Router) { }

  ngOnInit() {
   
    this.getallitems();
  }
  getallitems(){
    this.service.getitems();
    
  }
change(){
  if(this.bgg==true){
    this.bg="black"
  }else{
    this.bg="white"
  }
  
}
  addtocart(id){
    var customer=JSON.parse(localStorage.getItem('customer'));
    if(customer!=null){
      var customerid=customer.customerId;
      var val={itemId:id,customerId:customerid,quantity:1};
   
        this.userservice.orderNow(val).subscribe(data=>{
          //start show snakebar
          this.showsnackbar();
          //end show snakebar

          //start get customer cart count
          //var customer=JSON.parse(localStorage.getItem('customer'));          
          //var id=customer.customerId;
          this.userservice.getCusotmerCartCount(customerid).subscribe(data=>{
          var cartcount=document.getElementById("cartcount");
          cartcount.innerHTML=data;
          })
          //end get customer cart count
        })
        }else{
          this.router.navigate(['/login']);
        }
    }
    
    showsnackbar(){
      var x=document.getElementById("snackbar");
      x.className="show";

      setTimeout(function(){
        x.className=x.className.replace("show","");
      
      },3000);
    }
    FilterFn(){
      
      var ItemNameFilter=this.ItemNameFilter;
     
  
      this.service.itemlist=this.service.itemlistWithoutFilter.filter(function(el){
        return el.name.toString().toLowerCase().includes(
          ItemNameFilter.toString().trim().toLowerCase()
        )||el.price.toString().toLowerCase().includes(
          ItemNameFilter.toString().trim().toLowerCase()
        )
      });
    }
    
    
    /*this.userservice.orderNow(id).subscribe(data=>{
      if(localStorage.getItem("cart")==null){
        this.cart.push(data);
        localStorage.setItem("cart",JSON.stringify(this.cart));
      }
      else{
       this.cart=JSON.parse(localStorage.getItem("cart"));
        this.cart.push(data);
        localStorage.setItem("cart",JSON.stringify(this.cart));
      }
      console.log(data);
      console.log(this.cart);
    for(let i=0;i<this.cart.length;i++){
      
     
      console.log(this.cart[i].quantity);
    }
    })*/
  //}
}
