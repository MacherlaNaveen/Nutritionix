import { FoodItem } from './../models/food-item';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {

  constructor(private _http : HttpClient) { }

  public getWishlist(token:string):Observable<any>{
   console.log(token);
   const headers =new HttpHeaders().set('Authorization',token);
    return this._http.get("http://nutrition17-970465635.eu-north-1.elb.amazonaws.com:8084/wish/getUserWishList",{headers});
    
  }

  public AddToWishlist(foodItem:FoodItem,token:any){
    console.log(token);
   const headers =new HttpHeaders().set('Authorization',token);
   return this._http.post("http://nutrition17-970465635.eu-north-1.elb.amazonaws.com:8084/wish/addItem",foodItem,{headers});
  }

  public deleteFromWishList(itemid:string,token:any){
    const headers =new HttpHeaders().set('Authorization',token);
   return this._http.delete("http://nutrition17-970465635.eu-north-1.elb.amazonaws.com:8084/wish/deleteUserProduct/"+itemid,{headers});
  }
}
