import { Component } from '@angular/core';
import { DealRepository } from '../api/deal-repository.service';
import { Deal } from '../api/deal';
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

	constructor(private router:Router){
		this.food = true;
		this.drink = false;
		this.loggedIn = this.router.url == '/user';
	}

	updateMode(){ // this mode refers to food or drink
		if (this.food){
			this.food = false;
			this.drink = true;
		} else {
			this.food = true;
			this.drink = false;
		}
	}

}