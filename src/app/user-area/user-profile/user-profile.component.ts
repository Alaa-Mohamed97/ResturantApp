import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() userName:string;
  userId:any;
  newPassword:any;
  confirmNewPassword:any;
  customeroldPassword:any;
  msgErr:string;
  constructor(private customersrevice:CustomerService,private router:Router) { }

  ngOnInit() {
    this.loadcustomerdata();
  }
  loadcustomerdata(){
    var customer=JSON.parse(localStorage.getItem('customer'));          
    if(customer!=null){
      this.userName=customer.name;
      this.userId=customer.customerId;
    }else{
      this.router.navigate(['/login']);
    }
  }
  editUserName(){
    var val={customerId:this.userId,name:this.userName}
    this.customersrevice.editUserName(val).subscribe(data=>{
      localStorage.setItem('customer',JSON.stringify(data));
      location.reload();
    })
  }
  changePassword(){
    var customer=JSON.parse(localStorage.getItem('customer')); 
    if(customer.password!=this.customeroldPassword)
    {
      this.msgErr="The Old Password Is Wrong";

    }else if(this.newPassword!=this.confirmNewPassword){
      this.msgErr="Confirmed Password Not Equal New Password";

    }else if(this.newPassword==this.customeroldPassword){
      this.msgErr="The New Password Should not Equal Old Password";

    }else{
      var val={customerId:this.userId,password:this.newPassword,confirmPassword:this.confirmNewPassword}
      this.customersrevice.changePassword(val).subscribe(data=>{
        if(data !=null){
          localStorage.setItem('customer',JSON.stringify(data));
          location.reload();
        }else{
          this.msgErr="Enter Right Data";
        }
        
      })
    }
  
  }
}
