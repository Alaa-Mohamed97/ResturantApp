import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  @Input() category:any;
  catId:string;
  catName:string;

  constructor(private service:CategoryService) { }

  ngOnInit() {
    this.getcategory();
  }

  getcategory(){
    this.catId=this.category.catId;
    this.catName=this.category.catName;
  }

  addcategory(){
    var val={catId:this.catId,catName:this.catName};
    this.service.addcategory(val).subscribe(data=>{

    })
  }
  editcategory(){
    var val={catId:this.catId,catName:this.catName};
    this.service.editcategory(val).subscribe(data=>{
      
    })
  }
}
