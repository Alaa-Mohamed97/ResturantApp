import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  constructor(private service:ItemService) { }

  ngOnInit() {
    this.refreshItemList();
  }

  refreshItemList(){
  
    this.service.getitems();
  }


  editClick(item){
    this.service.item.itemId=item.itemId;
    this.service.item.name=item.name;
    this.service.item.price=item.price;
    this.service.item.catId=item.catId;
    this.service.item.image=item.image;
    this.service.PhotoFilePath=this.service.photoUrl+item.image
    
  }

  deleteItem(dataitem){
    if(confirm('Are you sure?')){
    
    this.service.deleteitem(dataitem.itemId).subscribe(data=>{
      this.refreshItemList();
    })
    }
  }
 
 
}
