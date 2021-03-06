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

	public loadUser(jsonObj, email) {
		this.user.name = jsonObj.name;
		this.user.addr = jsonObj.address;
		this.user.favorites = jsonObj.favorites;
		this.user.filters = jsonObj.filters;
		this.user.calendar = jsonObj.calendar;
		this.user.accountType = jsonObj.accountType;
		this.user.id = jsonObj.id;
		this.user.email = email;
		return this.user.accountType != undefined;
	}

	public getUser() : User {
		return this.user;
	}

	public login(email: string, password: string) {
		let body = {"email": email, "password": password};
		return this.http
			.post("/api/User/login", JSON.stringify(body), this.options)
			.toPromise()
			.then(x => this.loadUser(x.json(), email))
			.catch(x => false);
	}

	public exists(email: string) {
		let body = {"email": email};
		return this.http
			.post("/api/User/exists", JSON.stringify(body), this.options)
			.toPromise()
			.then(x => x.json()['exists'])
			.catch(x => x.message);
	}

	public register(body) {
		return this.http
			.post("/api/User/register", JSON.stringify(body), this.options)
			.toPromise()
			.then(x => this.loadUser(x.json(), body["email"]))
			.catch(x => x.message);
	}

	public logout() {
		return this.http
			.delete("/api/User/logout")
			.toPromise()
			.then(x => this.user = new User)
			.catch(x => false);
	}

}
