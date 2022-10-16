import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() customerName:string;
  cartcount:any;
  userlogin:boolean=false;



  constructor(private router:Router,private service:UserService,private serviceItm:ItemService) { }

  ngOnInit() {
    if(localStorage.getItem('customer')!=null){
      var customer=JSON.parse(localStorage.getItem('customer'));
      this.customerName= customer.name;
      var id=customer.customerId;

      this.userlogin=true;
      this.serviceItm.getallcategoryname();
      this.loadcustomercartcount(id);
    }else{
      this.userlogin;
    }
   
  }
  
  loadcustomercartcount(id:any){
    this.service.getCusotmerCartCount(id).subscribe(data=>{
      this.cartcount=data;
    })
  }
  getitemwithcatid(catid){
    if(catid==0){
      this.serviceItm.getitems();
    }else{
      this.serviceItm.getitemswithCatId(catid);
    }
  }
  Signout(){
    localStorage.clear();
    this.customerName="";
    this.router.navigate(['/login']).then(()=>{
      location.reload();
    });
  }


}
