import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorylist:any=[];
  ModalTitle:string;
  ActivateAddEditcategory:boolean=false;
  category:any;

  constructor(private service:CategoryService) { }

  ngOnInit() {
    this.loadAllCategory();
  }

  loadAllCategory(){
    return this.service.getallcategory().subscribe(data=>{
      this.categorylist=data;
    })
  }
  addClick(){
    this.category={
      catId:0,
      catName:"",
     

    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditcategory=true;
  }
  editClick(category){
    
    this.category=category;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditcategory=true;
    
  }
  closeClick(){
    this.ActivateAddEditcategory=false;
    this.loadAllCategory();
  }
  deletecategory(dataitem){
    if(confirm('Are you sure?')){
    
    this.service.deletecategory(dataitem.catId).subscribe(data=>{
      this.loadAllCategory();
    })
    }
  }
}
