import { Component } from '@angular/core';
import { DealRepository } from '../api/deal/deal-repository.service';
import { Deal } from '../api/deal/deal';
import { UserRepository } from '../api/user/user-repository.service';
import { User, Filter, FilterItem } from '../api/user/user';
import { Router,ActivatedRoute } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

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

	constructor(private router:Router,private dealsService:DealRepository){
		this.food = this.drink =false;
		this.loggedIn = this.router.url == '/user';
		//dealsService.listAll()
			//.then(x => this.deals = x);
		dealsService.listAll().then(x => console.log(x));
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

}