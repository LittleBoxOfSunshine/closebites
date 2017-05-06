import { Component, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

import { UserRepository } from '../api/user/user-repository.service';
import { User } from '../api/user/user';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})

export class LoginComponent { 
  email: string;
  password: string;
  error: boolean;

  constructor(private router: Router, private route:ActivatedRoute, private userService : UserRepository){
      this.error = false;
  }

  submit() { //login and route to appropriate page
    this.userService.login(this.email, this.password).then((x)=>{
      if(x) {
        if (this.userService.getUser().accountType == 'vendor')
          this.router.navigate(['/vendor']);
        else 
          this.router.navigate(['/user']);
      }
      else{
        this.error = true;
      }
    });
  }

}