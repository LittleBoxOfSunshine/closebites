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
    drinks:boolean;
    foodAndDrinks:boolean;
    dealMode:string;//food or drink for deals
    days:string[];
    times:string[];
    dealTypes:string[];
    typeNotChosen:boolean;
    startDate = new String;
    startTime: string;
    endDate = new String;
    endTime:string;
    startPrice = new Number;
    endPrice = new Number;
    mon:boolean;
    tue:boolean;
    wed:boolean;
    thur:boolean;
    fri:boolean;
    sat:boolean;
    sun: boolean;
    days2 = new Array<boolean>();
    repeat = new String;

    constructor(private router: Router, private route:ActivatedRoute, private dealsService:DealRepository,
            private userService:UserRepository){
        this.food = this.drinks = this.foodAndDrinks = false;
        this.mode = 'month';
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        this.times = ['7:00','8:00','9:00','10:00','11:00','Noon'];
        dealsService.listAll()
			.then(x => this.deals = x);
        this.mon = this.tue = this.wed = this.thur = this.fri = this.sat = this.sun = false;
        this.days2.push(this.sun,this.mon,this.tue,this.wed,this.thur,this.fri,this.sat);
        for (let day of this.days2){
            if (day)
                this.repeat = this.repeat.concat("1");
            else this.repeat = this.repeat.concat("0");
        }
    }

    clickDay(index:number){
        this.days2[index] = !this.days2[index];

        this.repeat = '';
        for (let day of this.days2){
            if (day)
                this.repeat = this.repeat.concat("1");
            else this.repeat = this.repeat.concat("0");
        }
        console.log(this.repeat);

    }

	updateMode(dealType:string){ // this mode refers to food or drink for when searching for deals
		console.log(dealType);
		this.food = dealType == 'food';
		this.drinks = dealType == 'drinks';
		this.foodAndDrinks = dealType == 'foodAndDrinks';
	}

    resetTypeNotChosen(){
        this.typeNotChosen = null;
    }

    addDeal(){
        if (!this.food && !this.drinks && !this.foodAndDrinks){ //when neither 'food' nor 'drink' not selected
            this.typeNotChosen = true;
        } else {
            console.log('test');
            this.typeNotChosen = false;
            /*if (this.food && !this.drink) 
                this.deal.type1 = 'Food';
            else if (this.drink && !this.food)
                this.deal.type1 = 'Drink';
            else if (this.food && this.drink){
                this.deal.type1='Food';
                this.deal.type2='Drink';
            }*/
            this.startDate = this.startDate.replace(/-/g,"/");
            this.endDate = this.endDate.replace(/-/g,"/");
            this.startDate = this.startDate.concat(' ',this.startTime);
            this.endDate = this.endDate.concat(' ',this.endTime);
            this.deal.repeat = this.repeat;
            this.deal.start = this.startDate;
            this.deal.end = this.endDate;
            this.deal.normPrice = this.startPrice;
            this.deal.discountedPrice = this.endPrice;

            var active;
            if(this.food)
                active = 'food';
            else if(this.drinks)
                active = 'drinks';
            else if(this.foodAndDrinks)
                active = 'foodAndDrinks';
            this.deal.type = active;
            
            this.dealsService.add2(this.deal).then((x) => {
                console.log(x);
            });

            //reset modal form values afterwards
            this.deal = new Deal;
            this.startPrice = this.endPrice = 0;
            this.startDate = this.endDate = this.endTime = this.startTime = '';
            this.food = this.drinks = this.foodAndDrinks = false;
            
        }
    }

    logout(){
		this.food = this.drinks = this.foodAndDrinks = false;
		this.deals = new Array<Deal>();
		this.deal = new Deal;
        this.userService.logout();
	}
}