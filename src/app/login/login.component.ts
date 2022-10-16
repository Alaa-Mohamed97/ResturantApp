import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() msgErorr:string='';
  constructor(private service:CustomerService,private route:Router) { }

  ngOnInit() {

  }
  /*-------------Start input validation area -------------*/
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  /*------------- End input validation area -------------*/
  
  onSubmit(Email:string,Password:string){
    var val={email:Email,password:Password};

    this.service.login(val).subscribe((data:any)=>{
      if(data !=null){
        localStorage.clear();
        localStorage.setItem('customer',JSON.stringify(data));
        
        
        this.route.navigate(['/home']).then(()=>{
          location.reload();
        });
      }else{
        this.msgErorr="Invalid Email or Password";
        this.route.navigate(['/login']);

      }
    
    })
  }
}
