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
  password2: string;
  error: boolean;
  passwordMatch:boolean;
  emailExists:boolean;

  constructor(private router: Router, private route:ActivatedRoute,private userService:UserRepository){
      this.route.params.subscribe(params => {
          this.mode = params['mode'];
    });
    this.passwordMatch = true;
    this.emailExists = false;
 
  }

  go (){
      /*if (this.password != this.password2 || this.userService.exists(this.email)){
          this.passwordMatch = (this.password == this.password2); //passwords don't match
          console.log(this.userService.exists(this.email));
          //if (this.userService.exists(this.email))  //email address already exists
          //    this.emailExists = true;
          //else this.emailExists = false;
      } else { //top two conditions don't apply*/

          this.passwordMatch=true;
          this.emailExists=false;
          let body = { email: this.email, password: this.password, 
            name: this.name, accountType: this.mode == 'vendor' ? 'vendor' : 'consumer' }
          if(this.mode == 'vendor')
            body['address'] = this.address;

          this.userService.register(body).then((x)=>{
            console.log(x);
            if(x) {
              if (this.mode == 'vendor')
                this.router.navigate(['/vendor']);
              else 
                this.router.navigate(['/user']);
            }
            else{
              this.error = true;
            }
          });
      //}
  }

}

