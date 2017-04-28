import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { User, Date, Filter, FilterItem } from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserRepository {

	private user: User;
	private options: RequestOptions;	

	constructor(private http: Http){
		this.user = new User;
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.options = new RequestOptions({ headers: headers });
	}

	public loadUser(jsonObj) {
		this.user.name = jsonObj.name;
		this.user.addr = jsonObj.address;
		this.user.favorites = jsonObj.favorites;
		this.user.filters = jsonObj.filters;
		this.user.calendar = jsonObj.calendar;
		this.user.accountType = jsonObj.accountType;
		this.user.id = jsonObj.id;
		
		return this.user.accountType;
	}

	public getUser() : User {
		return this.user;
	}

	public login(email: string, password: string) {

		let body = {"email": email, "password": password};
		this.http
			.post("User/login", JSON.stringify(body), this.options)
			.toPromise()
			.then(x => this.loadUser(x.json().data))
			.catch(x => false);

		// Note, in production there is no "loginVendor"; sepearing just allows two different
		// test cases to be derived from the mock API
		return this.http
			.get(email == 'vendor' ? "api/loginVendor" : 'api/login' )
			.toPromise()
			.then(x => this.loadUser(x.json().data))
			.catch(x => x.message);
		
		//return this.user.accountType == undefined;
	}

}
