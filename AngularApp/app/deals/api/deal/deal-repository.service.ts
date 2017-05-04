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

	listAll() : Promise<Deal[]>{
		return this.http
			.get('/api/Deal/find')
			.toPromise()
			.then(x => x.json() as Deal[])
			.catch(x => console.log(x.message));
	}

	find() : Promise<Deal[]>{

	}
/*	
	add(Deal: Deal) : Promise<Deal>{
		return this.http
			.post(this._apiUrl, Deal)
			.toPromise()
			.then(x => x.json().data as Deal)
			.catch(x => x.message);
	}
	
	update(Deal: Deal) : Promise<Deal>{
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
	}
*/
}
