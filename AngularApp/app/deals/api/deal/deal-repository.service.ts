import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Deal } from './deal';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DealRepository {

	private options: RequestOptions;

	constructor(private http: Http) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.options = new RequestOptions({ headers: headers });
	}

	getDeal(id: number) {
		// let body = {"email": email, "password": password};
		// this.http
		// 	.post("User/login", JSON.stringify(body), this.options)
		// 	.toPromise()
		// 	.then(x => this.loadUser(x.json().data))
		// 	.catch(x => false);

		return this.http
			.get("api/deal")
			.toPromise()
			.then(x => x.json().data)
			.catch(x => x.message);
	}

	/*private _movies: Deal[];*/

	//private _apiUrl = 'api/deals';

	listAll() : Promise<Deal[]>{
		return this.http
			.get('/api/temp')
			.toPromise()
			.then(x => x.json() as Deal[])
			.catch(x => console.log(x.message));
	}
	// listAll() {//: Promise<Deal[]>{
	// 	console.log( this.http.get('52.36.27.212/temp')
	// 		.map(res => res.json()));
	// }

	/*getById(id : number) : Promise<Deal>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as Deal)
			.catch(x => x.message);
	}*/
	
	add2(deal: Deal){
		let body = {"user_id": deal.id,"title":deal.name,"start_date":deal.start,"end_date":deal.end,"repeats":deal.repeat,
	"description":deal.description,"norm_price":deal.normPrice,"discount_price":deal.discountedPrice};
		return this.http
			.post("/api/Vendor/create", JSON.stringify(body),this.options)
			.toPromise()
			.then(x => x.json().data as Deal)
			.catch(x => x.message);
	}
	
	/*update(Deal: Deal) : Promise<Deal>{
		return this.http
			.put(`${this._apiUrl}/${Deal.id}`, Deal)
			.toPromise()
			.then(() => Deal)
			.catch(x => x.message);
	}

	delete(Deal: Deal) : Promise<void>{
		return this.http
			.delete(`${this._apiUrl}/${Deal.id}`)
			.toPromise()
			.catch(x => x.message);
	}*/
}
