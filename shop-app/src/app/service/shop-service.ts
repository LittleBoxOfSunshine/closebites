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
export class ShopService {

  private products: Product[];
  // private getUrl = 'http://localhost:8080/shop/items';
  private getUrl = 'http://52.36.27.212/index.php/';
  private postUrl = 'http://localhost:8080/cart/addToCart';
  private getUrl2 = 'https://private-16d7d-closebites.apiary-mock.com/product';
  constructor(
    //private _router: Router,
    //private route: ActivatedRoute,
    private http: Http
  ) {

  }

  getItems(): Promise<Product[]> {

    return Promise.resolve(this.products);
  }
  //https://scotch.io/tutorials/angular-2-http-requests-with-observables
  getItems1(){//: Observable<Product[]> {
    return this.http.get(this.getUrl)
                    .map((res:Response) => res.json())
                    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  purchaseItem(name: string) {
    let data = {'user':'user', 'item_name':name}
    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.postUrl, body, options) // ...using post request
  }

}
