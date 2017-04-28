import { Component, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { UserRepository } from '../api/user/user-repository.service';
import { User } from '../api/user/user';

@Component({
	moduleId: module.id,
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: [ 'sign-up.component.css' ]
})

export class SignUpComponent { 
  mode: string;

  constructor(private router: Router, private route:ActivatedRoute){
      this.route.params.subscribe(params => {
          this.mode = params['mode'];
    });
 
  }

  go (){
    if (this.mode == 'vendor'){
      this.router.navigate(['/vendor']);
    } else 
      this.router.navigate(['/user']);
  }

}