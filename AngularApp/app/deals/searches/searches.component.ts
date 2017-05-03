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
    favorite_deals: Deal[];
    filters: Filter[];
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

    getDeal(index: number) {
        this.deal = this.favorite_deals[index];
    }

    updateDeal() {

    }

    getFilter(id: number) {

    }
}