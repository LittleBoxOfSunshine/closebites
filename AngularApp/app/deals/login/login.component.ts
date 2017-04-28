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

  constructor(private router: Router, private route:ActivatedRoute, private userRepository : UserRepository){
      this.error = false;
  }

  submit() {
      // Allow promis callback to access this (parent scope)
      var that = this;
      // Make API call, provide "then" callback for when promise is satisfied
      this.userRepository.login(this.email, this.password)
          .then(function(valid) {
              if(valid == 'consumer')
                  that.router.navigateByUrl('user');
              else if(valid == 'vendor')
                  that.router.navigateByUrl('vendor');
              else
                  that.error = true;
          });
  }

}