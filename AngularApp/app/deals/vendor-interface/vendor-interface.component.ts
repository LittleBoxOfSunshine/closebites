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
    mode:string; //saved searches or favorited deals
    dealMode:string;//food or drink for deals
    days:string[];
    times:string[];

    constructor(private router: Router, private route:ActivatedRoute, private dealsService:DealRepository){
        this.mode = 'month';
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        this.times = ['7:00','8:00','9:00','10:00','11:00','Noon'];
        dealsService.listAll()
			.then(x => this.deals = x);
    }

    updateMode(newMode:string){
        this.mode = newMode;
    }

    updateDealMode(newMode:string){
        this.dealMode = newMode;
    }

    addDeal(){
        this.deal.type = this.dealMode=='food' ? 'food' : 'drink';
        this.dealsService.add(this.deal);
        //reset modal form values afterwards
        this.deal.name = this.deal.description = this.deal.type = '';
    }


}