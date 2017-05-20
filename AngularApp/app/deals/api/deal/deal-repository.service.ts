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
	
	deleteDeal(id: number) {
		let body = {"dealId": id};
		return this.http
			.delete("/api/Vendor/delete", JSON.stringify(body), this.options)
			.toPromise()
			.catch(x => x.message);
	}

	add2(deal: Deal) : Promise<Deal> {
		let body = {"user_id": deal.id,"title":deal.name,"start_date":deal.start,"end_date":deal.end,"repeat_days":deal.repeat,
	"description":deal.description,"norm_price":deal.normPrice,"discount_price":deal.discountedPrice,"photoUrl":deal.photoUrl,
	"dType": deal.dType};
		return this.http
			.post("/api/Vendor/create", JSON.stringify(body),this.options)
			.toPromise()
			.then(x => function(x){
				deal.id = x.json()['dealId'];
				return deal;
			})
			.catch(x => x.message);
	}

	update(deal: Deal,id: number) : Promise<Deal> {
		let body = {"dealId":id,"title":deal.name,"start_date":deal.start,"end_date":deal.end,"repeat_days":deal.repeat,
	"description":deal.description,"norm_price":deal.normPrice,"discount_price":deal.discountedPrice,"photoUrl":deal.photoUrl,
	"dType": deal.dType};
		return this.http
			.post("/api/Vendor/update", JSON.stringify(body),this.options)
			.toPromise()
			.then(x => function(x){
				deal.id = x.json()['dealId'];
				return deal;
			})
			.catch(x => x.message);
	}

	getDeal(id: number) {
		let body = {"dealId": id};
		return this.http
			.post("/api/Deal/details", JSON.stringify(body), this.options)
			.toPromise()
			.then(x => x.json())
			.catch(x => false);
	}

	listAll() : Promise<Deal[]>{
		return this.http
			.get('/api/Deal/find')
			.toPromise()
			.then(x => x.json() as Deal[])
			.catch(x => console.log(x.message));
	}

	find(body) : Promise<Deal[]> {
		return this.http
			.post('/api/Deal/find', JSON.stringify(body), this.options)
			.toPromise()
			.then(x => x.json() as Deal[])
			.catch(x => console.log(x.message));
	}
}
