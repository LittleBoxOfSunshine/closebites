import { Component, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { DealRepository } from '../api/deal/deal-repository.service';
import { Deal } from '../api/deal/deal';
import { UserRepository } from '../api/user/user-repository.service';
import { User, Date } from '../api/user/user';

@Component({
  moduleId: module.id,
  selector: 'vendor',
  templateUrl: 'vendor-interface.component.html',
  styleUrls: [ 'vendor-interface.component.css' ]
})

export class VendorInterfaceComponent { 
    deal = new Deal;
    deals:Deal[];
    mode:string; //month,week,day
    food:boolean;
    drink:boolean;
    dealMode:string;//food or drink for deals
    days:string[];
    times:string[];
    dealTypes:string[];
    typeNotChosen:boolean;

    constructor(private router: Router, private route:ActivatedRoute, private dealsService:DealRepository){
        this.food = this.drink = false;
        this.mode = 'month';
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        this.times = ['7:00','8:00','9:00','10:00','11:00','Noon'];
        dealsService.listAll()
			.then(x => this.deals = x);
    }

    updateMode(newMode:string){
        this.mode = newMode;
    }

    updateDealMode(dealType:string){
        //change food and drink boolean values on click
        if (dealType == 'food'){
			this.food = !this.food;
		} else {
			this.drink = !this.drink;
		}
    }

    resetTypeNotChosen(){
        this.typeNotChosen = null;
    }

    addDeal(){
        if (!this.food && !this.drink){ //when neither 'food' nor 'drink' not selected
            this.typeNotChosen = true;
        } else {
            this.typeNotChosen = false;
            if (this.food && !this.drink) 
                this.deal.type1 = 'Food';
            else if (this.drink && !this.food)
                this.deal.type1 = 'Drink';
            else if (this.food && this.drink){
                this.deal.type1='Food';
                this.deal.type2='Drink';
            }
            this.dealsService.add(this.deal);

            //reset modal form values afterwards
            this.deal = new Deal;
        }
    }


}