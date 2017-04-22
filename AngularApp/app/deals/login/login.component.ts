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

  constructor(private router: Router, private route:ActivatedRoute){
 
  }

  submit (){
      console.log("Email => " + this.email);
      console.log("Password => " + this.password);
  }

}