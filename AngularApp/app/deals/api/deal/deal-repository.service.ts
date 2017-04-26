import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Deal } from './deal';

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

	/*private _movies: Deal[];

	private getIndex(id : number){
		for (var i = this._movies.length; i--;) {
			var movie = this._movies[i];
			if(movie.id == id) return i;
		}
		return -1;
	}

	constructor(){
		this._movies = [
			{ id: 1, title: 'Batman', year: 1988, imagePath: 'images/shining.jpg', rating: 0 },
			{ id: 2, title: 'Home Alone', year: 1990, imagePath: 'images/nemo.jpg', rating: 0 },
			{ id: 3, title: 'Titanic', year: 1996, imagePath: 'images/hungergames.jpg', rating: 0 }
		];
	}

	public list() : Deal[] {
		return this._movies;
	}

	public get(id : number) : Deal {
		var index = this.getIndex(id);
		return this._movies[index];
	}

	public add(movie: Deal) {
		movie.id = this._movies.length + 1;
		this._movies.push(movie);
	}

	public update(movie: Deal) {
		var index = this.getIndex(movie.id);
		this._movies[index] = movie;
	}

	public delete(id : number) {
		var index = this.getIndex(id);
		this._movies.splice(index, 1);
	}*/
}
