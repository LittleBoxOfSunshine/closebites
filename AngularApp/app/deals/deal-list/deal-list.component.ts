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
	drink:Boolean;
	loggedIn:Boolean;
	deals = new Array<Deal>(); //list of deals that show after searching
	deal = new Deal; //used to bring up a specific deal in the modal
	zip:number;

	constructor(private router:Router,private dealsService:DealRepository,private userService:UserRepository,
			private http: Http){
		this.food = this.drink =false;
		this.loggedIn = this.router.url == '/user';
		//dealsService.listAll()
			//.then(x => this.deals = x);
		dealsService.listAll().then(x => this.deals = x);

		var that = this;
		window.navigator.geolocation.getCurrentPosition(function(pos){
    		console.log(pos);
		  	that.http
			  .get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true&key=AIzaSyAMApUB2WTGZ_BQPtvCV9VJEr4z4buMs90')
			  .toPromise()
			  .then(function(res){
				res = res.json()['results'];
				console.log(res);
				var temp = res["0"].address_components;
				console.log(temp);

				for(var i = 0; i < temp.length; i++) {
					console.log(temp[i]);
					var idx = temp[i]['types'].indexOf("postal_code")
    				if(idx != -1) {
						console.log(temp[i]['long_name']);
						that.zip = temp[i]['long_name'];
					}
				}
  			});
		});
		
	}

	updateMode(dealType:string){ // this mode refers to food or drink for when searching for deals
		if (dealType == 'food'){
			this.food = !this.food;
		} else {
			this.drink = !this.drink;
		}
	}

	identifyDeal(id: number){
		this.dealsService.getById(id)
			.then(x => this.deal = x);
	}

	logout(){
		this.food = this.drink = false;
		this.loggedIn = false;
		this.deals = new Array<Deal>();
		this.deal = new Deal;
		this.userService.logout();
	}

}
