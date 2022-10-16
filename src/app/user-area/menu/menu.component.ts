import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/shared/item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList:any=[];
  constructor(private service:UserService,private route:Router,private activeRoute: ActivatedRoute,private serviceitm:ItemService) { }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu(){
    this.service.getmenu().subscribe(data=>{
      this.menuList=data;
      
    })
  }
  loaditemdetails(id) {
    //let itemid=this.activeRoute.snapshot.params['id'];
    this.serviceitm.getitemdatailes(id);
  
  }
}
