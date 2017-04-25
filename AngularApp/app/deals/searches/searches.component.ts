import { Component, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { DealRepository } from '../api/deal/deal-repository.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'searches.component.html',
  styleUrls: [ 'searches.component.css' ]
})

export class SearchesComponent { 
    foodOrDrink:string;
    dealOrSearch:string;

    constructor(private router: Router, private route:ActivatedRoute){}

    ngOnInit(){
        this.dealOrSearch = this.router.url=='/mysearches' ? 'search':'deal';
    }

    updateMode(newMode:string){
        this.foodOrDrink = newMode;
    }

    updateBoxMode(){
        this.dealOrSearch = this.dealOrSearch=='search' ? 'deal': 'search';
    }


}