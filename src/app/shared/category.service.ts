import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getallcategory(){
    return this.http.get<any>(environment.apiBasicUrl+"Category/getCategory");
  }

  addcategory(val){
    return this.http.post(environment.apiBasicUrl+"Category/AddCategory",val);
  }
  editcategory(val){
    return this.http.post(environment.apiBasicUrl+"Category/EditCategory",val);
  }
  deletecategory(id:any){
    return this.http.delete(environment.apiBasicUrl+"Category/DeleteCategory?="+id);
  }
}
