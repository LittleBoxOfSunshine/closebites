import { Component } from '@angular/core';
import { DealRepository } from '../api/deal/deal-repository.service';
import { Deal } from '../api/deal/deal';
import { UserRepository } from '../api/user/user-repository.service';
import { User, Filter, FilterItem } from '../api/user/user';
import { Router,ActivatedRoute } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'deal-list',
  templateUrl: 'deal-list.component.html',
  styleUrls: [ 'deal-list.component.css' ]
})

export class DealListComponent { 
	food:Boolean;
	drinks:Boolean;
	loggedIn:Boolean;
	deals = new Array<Deal>(); //list of deals that show after searching
	deal = new Deal; //used to bring up a specific deal in the modal
	zip:number;
	mexican:boolean;
	chinese:boolean;
	italian:boolean;
	korean:boolean;
	murican:boolean;
	foodAndDrinks:boolean;
	favoriteDeal:boolean;

	constructor(private router:Router,private dealsService:DealRepository,private userService:UserRepository,
			private http: Http){
		this.food = this.drinks = this.chinese = this.mexican = this.korean = this.italian = this.murican = false;
		this.foodAndDrinks = true;
		this.loggedIn = this.router.url == '/user';
		dealsService.listAll().then(x => this.deals = x); 

		var that = this;
		// window.navigator.geolocation.getCurrentPosition(function(pos){
    	// 	console.log(pos);
		//   	that.http
		// 	  .get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true&key=AIzaSyAMApUB2WTGZ_BQPtvCV9VJEr4z4buMs90')
		// 	  .toPromise()
		// 	  .then(function(res){
		// 		res = res.json()['results'];
		// 		console.log(res);
		// 		var temp = res["0"].address_components;
		// 		console.log(temp);

		// 		for(var i = 0; i < temp.length; i++) {
		// 			console.log(temp[i]);
		// 			var idx = temp[i]['types'].indexOf("postal_code")
    	// 			if(idx != -1) {
		// 				console.log(temp[i]['long_name']);
		// 				that.zip = temp[i]['long_name'];
		// 			}
		// 		}
  		// 	});
		// });
	}

	updateMode(dealType:string){ // this mode refers to food or drink for when searching for deals
		console.log(dealType);
		this.food = dealType == 'food';
		this.drinks = dealType == 'drinks';
		this.foodAndDrinks = dealType == 'foodAndDrinks';
	}

	identifyDeal(id: number){
		this.dealsService.getDeal(id)
			.then(x => function(x) {
				console.log(x);
				this.deal = x;
				
				if (this.userService.getUser().favorites.indexOf(this.deal.id) != -1)
					this.favoriteDeal = true;
				else 
					this.favoriteDeal = false;
			});
	}

	logout(){
		this.food = this.drinks = this.chinese = this.mexican = this.korean = this.italian = this.murican = false;
		this.foodAndDrinks = true;
		this.deals = new Array<Deal>();
		this.deal = new Deal;
		this.userService.logout();
	}

	updateSearch(){
		console.log(this.mexican);
		console.log(this.chinese);
		console.log(this.italian);
		console.log(this.korean);
		console.log(this.murican);
		console.log(this.food);
		console.log(this.drinks);
		console.log(this.foodAndDrinks);
	}

	getUserName(){
		return this.userService.getUser().name;
	}

	getUserEmail(){
		return this.userService.getUser().email;
	}

}
