import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  readonly photoUrl="https://localhost:44388/Photos/";
  PhotoFilePath:string;
  itemlist:any=[];
  itemlistWithoutFilter:any=[];
  catList:any=[];
  itemdetailes:any;
  item={
    itemId:0,
    name:"",
    price:"",
    image:"",
    catId:0

  }
  constructor(private http:HttpClient) { }

  getitems(){
    return this.http.get(environment.apiBasicUrl+"items/allitems").toPromise().then(
      res=>{
        this.itemlist=res;
        this.itemlistWithoutFilter=res;
      }
    );
  }
  getitemswithCatId(catId){
    return this.http.get(environment.apiBasicUrl+"items/GetItemsWithCatId?="+catId).toPromise().then(
      res=>{
        this.itemlist=res;
        this.itemlistWithoutFilter=res;
      }
    );
  }
  additem(val){
    return this.http.post(environment.apiBasicUrl+"items/AddItem",val)
  }
  updateitem(val){
    return this.http.post(environment.apiBasicUrl+"items/UpdateItem",val)
  }
  deleteitem(id:any){
    return this.http.delete(environment.apiBasicUrl+"items/DeleteItem?="+id);
  }
  uploadPhoto(val:any){
    return this.http.post(environment.apiBasicUrl+'items/SaveFile',val);
  }
  getallcategoryname(){
    return this.http.get(environment.apiBasicUrl+"Category/getCategory").toPromise().then(
      res=>{
       this.catList=res;
      }
    );
   // return this.http.get<any>(environment.apiBasicUrl+"Category/getCategory");
  }
  getitemdatailes(itemid){
    return this.http.get(environment.apiBasicUrl+"items/ItemDetailes?="+itemid).toPromise().then(
      res=>{
        this.itemdetailes=res;
       
      }
    );;
  }
}
