import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-detailes',
  templateUrl: './item-detailes.component.html',
  styleUrls: ['./item-detailes.component.css']
})
export class ItemDetailesComponent implements OnInit {

  private routeSup:Subscription;
  itemid:any;
  constructor(private route: ActivatedRoute,private service:ItemService) { }

  ngOnInit() {
    this.loaditem();
  }
  loaditem() {
    this.itemid=this.route.snapshot.params['id'];
    this.service.getitemdatailes(this.itemid);
  
  }
}
