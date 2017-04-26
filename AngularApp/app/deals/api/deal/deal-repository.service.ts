import { Injectable } from '@angular/core';
import { Deal } from './deal';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealRepository {

	private _apiUrl = 'api/deals';

	constructor(private http: Http) {}

	listAll() : Promise<Deal[]>{
		return this.http
			.get(this._apiUrl)
			.toPromise()
			.then(x => x.json().data as Deal[])
			.catch(x => x.message);
	}

	getById(id : number) : Promise<Deal>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as Deal)
			.catch(x => x.message);
	}
	
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
}
