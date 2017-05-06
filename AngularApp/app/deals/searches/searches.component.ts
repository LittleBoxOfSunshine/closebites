import { Component, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { DealRepository } from '../api/deal/deal-repository.service';
import { Deal } from '../api/deal/deal';
import { UserRepository } from '../api/user/user-repository.service';
import { User, Filter, FilterItem } from '../api/user/user';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'searches.component.html',
  styleUrls: [ 'searches.component.css' ]
})

export class SearchesComponent { 
    foodOrDrink:string;
    dealOrSearch:string;
    favorite_deals: Deal[]; //page of favorited deals
    filters: Filter[]; //page of filters
    dealIds = new Array<number>();
    deal: Deal;//current favorited deal

    constructor(private router: Router, private route:ActivatedRoute, 
                private userRepository : UserRepository, 
                private dealRepository : DealRepository) {
        this.favorite_deals = [];
        this.dealIds = this.userRepository.getUser().favorites;

        for(let id of this.dealIds)
            this.dealRepository.getDeal(id).then(x => this.favorite_deals.push(x));
        
        this.filters = this.userRepository.getUser().filters;
    }

    ngOnInit() {
        this.dealOrSearch = this.router.url=='/mysearches' ? 'search':'deal';
    }

    updateMode(newMode:string) {
        this.foodOrDrink = newMode;
    }

    updateBoxMode() {
        this.dealOrSearch = this.dealOrSearch=='search' ? 'deal': 'search';
    }

    getDeal(identification: number) {
        for (let deal of this.favorite_deals){
            if (deal.id == identification)
                this.deal = deal;
        }
    }

    updateDeal() {

    }

    getFilter(id: number) {

    }

    getUserName(){
		return this.userRepository.getUser().name;
	}

	getUserEmail(){
		return this.userRepository.getUser().email;
	}

    logout(){
		this.deal = new Deal;
		this.userRepository.logout();
	}
}