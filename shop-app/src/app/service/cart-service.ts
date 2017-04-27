import { Injectable } from '@angular/core';
//import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public stock: number
  ) {

  }
}

@Injectable()
export class CartService {

  private getUrl = 'http://localhost:8080/cart/getCart';
  private deleteUrl = 'http://localhost:8080/cart/deleteCartItem';

  constructor(
    //private _router: Router,
    //private route: ActivatedRoute,
    private http: Http
  ) {

  }

  getCart(username: string) {
    let data = {'user': username};
    let body = JSON.stringify(data);
    let options = new RequestOptions({
        // Have to make a URLSearchParams with a query string
        search: new URLSearchParams() // <-----
    });
    let userloc: URLSearchParams = new URLSearchParams();
    userloc.set('user', username);
    return this.http.get(this.getUrl, {search: userloc}) // ...using post request
                     .map((res:Response) => res.json())
  }

  deleteCartItem(item: string) {
    let options2 = new RequestOptions({
        search: new URLSearchParams(item) // <-----
    });
    let userloc: URLSearchParams = new URLSearchParams();
    userloc.set('item', item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(this.deleteUrl, {search: userloc})
  }


}
