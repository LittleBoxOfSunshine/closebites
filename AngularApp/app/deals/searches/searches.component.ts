import { Component, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { DealRepository } from '../api/deal-repository.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'searches.component.html',
  styleUrls: [ 'searches.component.css' ]
})

export class SearchesComponent { 
    foodOrDrink:string;
    dealOrSearch:string;

    constructor(private router: Router, private route:ActivatedRoute){
        this.dealOrSearch = 'search';
    }

    reset(){
        this.dealOrSearch = 'search';
    }

    updateMode(newMode:string){
        this.foodOrDrink = newMode;
    }

    updateBoxMode(){
        this.dealOrSearch = this.dealOrSearch=='search' ? 'deal': 'search';
    }


}