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
    days3:string[];
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
    vendorDeals:Deal[];
    repeating:string;
    createOrEdit:string;

    constructor(private router: Router, private route:ActivatedRoute, private dealsService:DealRepository,
            private userService:UserRepository){
        this.food = this.drinks = this.foodAndDrinks = false;
        this.repeating = '';
        this.mode = 'month';
        this.days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
        this.days3 = ['Sundays', 'Mondays','Tuesdays','Wednesdays','Thursdays','Fridays','Saturdays'];
        dealsService.listAll()
			.then(x => this.deals = x);
        this.mon = this.tue = this.wed = this.thur = this.fri = this.sat = this.sun = false;
        this.days2.push(this.sun,this.mon,this.tue,this.wed,this.thur,this.fri,this.sat);
        for (let day of this.days2){
            if (day)
                this.repeat = this.repeat.concat("1");
            else this.repeat = this.repeat.concat("0");
        }
        var body = {"isVendor":true};
        dealsService.find(body).then(x => this.vendorDeals = x);
    }

    updateDeal(id:number){ //identify deal for when updating it
        this.dealsService.getDeal(id)
			.then(x => this.deal = x)
			.catch(x => console.log(x.message));
        this.createOrEdit = "edit";
        this.typeNotChosen = null;
        this.food = this.drinks = this.foodAndDrinks = false;
    }

    identifyDeal(id: number){
        console.log(id);
		this.dealsService.getDeal(id)
			.then(x => this.deal = x)
			.catch(x => console.log(x.message));
	}

    clickDay(index:number){
        this.days2[index] = !this.days2[index];

        this.repeat = '';
        for (let day of this.days2){
            if (day)
                this.repeat = this.repeat.concat("1");
            else this.repeat = this.repeat.concat("0");
        }

    }

	updateMode(dealType:string){ // this mode refers to food or drink
		this.food = dealType == 'food';
		this.drinks = dealType == 'drinks';
		this.foodAndDrinks = dealType == 'foodAndDrinks';
	}

    resetTypeNotChosen(){
        this.deal = new Deal;
        this.createOrEdit = 'create';
        this.typeNotChosen = null;
        this.food = this.drinks = this.foodAndDrinks = false;
    }

    addDeal(){
        if (!this.food && !this.drinks && !this.foodAndDrinks){ //when neither 'food' nor 'drink' selected
            this.typeNotChosen = true; 
        } else {
            for (var i = 0; i < this.repeat.length; i++){ //repeating days based on bits of repeat
                if (this.repeat[i] == '1' && i < (this.repeat.length - 1)){
                    this.repeating = this.repeating.concat(this.days3[i],',',' ');
                } else if (this.repeat[i] == '1' && i == (this.repeat.length - 1))
                    this.repeating = this.repeating.concat(this.days3[i]);
            }
            this.typeNotChosen = false;
            this.startDate = this.startDate.replace(/-/g,"/");
            this.endDate = this.endDate.replace(/-/g,"/");
            this.startDate = this.startDate.concat(' ',this.startTime);
            this.endDate = this.endDate.concat(' ',this.endTime);
            this.deal.repeat = this.repeating;
            this.deal.start = this.startDate;
            this.deal.end = this.endDate;

            var active;
            if(this.food)
                active = 'Food';
            else if(this.drinks)
                active = 'Drinks';
            else if(this.foodAndDrinks)
                active = 'Food+Drinks';
            this.deal.dType = active;
            
            if (this.createOrEdit == 'create'){
                this.dealsService.add2(this.deal).then((x) => {
                    //console.log(x);
                    //reset modal form values afterwards
                    this.deal = new Deal;
                    this.startPrice = this.endPrice = 0;
                    this.startDate = this.endDate = this.endTime = this.startTime = '';
                    this.food = this.drinks = this.foodAndDrinks = false;
                    this.repeating = '';
                });
            } else {
                console.log(this.deal.id);
                this.dealsService.update(this.deal).then((x) => {
                    console.log(x);
                });
            }

            var body = {"isVendor":true};
            this.dealsService.find(body).then(x => this.vendorDeals = x);

        }
    }

    logout(){
		this.food = this.drinks = this.foodAndDrinks = false;
		this.deals = new Array<Deal>();
        this.vendorDeals = new Array<Deal>();
		this.deal = new Deal;
        this.userService.logout();
	}

    getUserName(){
		return this.userService.getUser().name;
	}

	getUserEmail(){
		return this.userService.getUser().email;
	}
}