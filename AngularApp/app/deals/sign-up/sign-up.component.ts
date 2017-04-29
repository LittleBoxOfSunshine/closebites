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
  name: string;
  address: string;
  email: string;
  password: string;
  error: boolean;

  constructor(private router: Router, private route:ActivatedRoute,private userService:UserRepository){
      this.route.params.subscribe(params => {
          this.mode = params['mode'];
    });
 
  }

  go (){

    let body = { email: this.email, password: this.password, 
      name: this.name, accountType: this.mode }
    if(this.mode == 'vendor')
      body['address'] = this.address;

    this.userService.register(body).then(function(x){
      if(x) {
        if (this.mode == 'vendor')
          this.router.navigate(['/vendor']);
        else 
          this.router.navigate(['/user']);
      }
      else{
        this.error = true;
        console.log(this.error);
      }
    });
  }

}