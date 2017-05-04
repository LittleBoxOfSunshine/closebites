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
	
	add2(deal: Deal) : Promise<Deal> {
		let body = {"user_id": deal.id,"title":deal.name,"start_date":deal.start,"end_date":deal.end,"repeats":deal.repeat,
	"description":deal.description,"norm_price":deal.normPrice,"discount_price":deal.discountedPrice,"photoUrl":deal.photoUrl};
		return this.http
			.post("/api/Vendor/create", JSON.stringify(body),this.options)
			.toPromise()
			.then(x => function(x){
				deal.id = x.json()['dealId'];
				return deal;
			})
			.catch(x => x.message);
	}

	getDeal(id: number) {
		let body = {"dealId": id};
		this.http
			.post("/api/Deal/details", JSON.stringify(body), this.options)
			.toPromise()
			.then(x => x.json() as Deal)
			.catch(x => false);
	}

	listAll() : Promise<Deal[]>{
		return this.http
			.get('/api/Deal/find')
			.toPromise()
			.then(x => x.json() as Deal[])
			.catch(x => console.log(x.message));
	}

	find() : Promise<Deal[]> {
		let body = {};
		return this.http
			.post('/api/Deal/find', JSON.stringify(body), this.options)
			.toPromise()
			.then(x => x.json() as Deal[])
			.catch(x => console.log(x.message));
	}
}
