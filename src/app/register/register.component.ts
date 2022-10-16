import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  constructor(private service:CustomerService,private route:Router) { }

  ngOnInit() {
  }

    /*-------------Start input validation area -------------*/
    registerForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      confirmPassword:new FormControl('',Validators.required)
    })
    get name(){return this.registerForm.get('name')}
    get email(){return this.registerForm.get('email')}
    get password(){return this.registerForm.get('password')}
    get confirmPassword(){return this.registerForm.get('confirmPassword')}
    /*------------- End input validation area -------------*/


  onSubmit(Name:string,Email:string,Password:string,ConfirmPassword:string){

    var val={name:Name,email:Email,password:Password,confirmPassword:ConfirmPassword};

    this.service.registercustomer(val).subscribe(
      (data:any)=>{
        localStorage.clear();
        localStorage.setItem('customer',JSON.stringify(data));
        this.route.navigate(['/home']).then(()=>{
          location.reload();
        });
      }
    );
  }
}
