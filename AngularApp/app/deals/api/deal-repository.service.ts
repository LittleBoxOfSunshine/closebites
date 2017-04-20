import { Injectable } from '@angular/core';

import { Deal } from './deal';

@Injectable()
export class DealRepository {

	private _movies: Deal[];

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
	}
}
