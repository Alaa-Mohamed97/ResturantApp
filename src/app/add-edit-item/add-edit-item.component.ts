import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../shared/item.service';
@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit {
  
  @Input() 
  
   MSGContent:string;
   catList:any=[];

  constructor(private service:ItemService) { }

  ngOnInit() {
    this.loaditem();
  }

  loaditem(){
 this.service.getallcategoryname();
 this.service.PhotoFilePath=this.service.photoUrl+this.service.item.image;

  
   
    
  }

  addItem(){
    var val={name:this.service.item.name,price:this.service.item.price,
      catId:this.service.item.catId,image:this.service.item.image}
    this.service.additem(val).subscribe(data=>{
      this.MSGContent="Item Added Successfully";
      this.showsnackbar();
      this.service.getitems();
    })
  }
  updateItem(){
    var val={itemid:this.service.item.itemId, name:this.service.item.name,price:this.service.item.price,
      catId:this.service.item.catId,image:this.service.item.image }
    this.service.updateitem(val).subscribe(data=>{
      this.MSGContent="Item Updated Successfully";
      this.showsnackbar();
      this.service.getitems();
    })
  }
  uploadPhoto(event){
    
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.service.item.image=data.toString();
      this.service.PhotoFilePath=this.service.photoUrl+this.service.item.image;
    })
  }
  showsnackbar(){
    var x=document.getElementById("snackbar");
    x.className="show";

    setTimeout(function(){
      x.className=x.className.replace("show","");
    
    },4000);
  }
}
