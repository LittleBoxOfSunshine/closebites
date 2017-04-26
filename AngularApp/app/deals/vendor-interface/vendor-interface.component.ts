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
    mode:string;
    dealMode:string;
    days:string[];
    times:string[];

    constructor(private router: Router, private route:ActivatedRoute){
        this.mode = 'month';
        this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        this.times = ['7:00','8:00','9:00','10:00','11:00','Noon'];
    }

    updateMode(newMode:string){
        this.mode = newMode;
    }

    updateDealMode(newMode:string){
        this.dealMode = newMode;
    }


}