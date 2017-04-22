import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as Shared from '../shared/index';

import { DealListComponent } from './deal-list/deal-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchesComponent } from './searches/searches.component';
import { VendorInterfaceComponent } from './vendor-interface/vendor-interface.component';
import { LoginComponent } from './login/login.component';

import { DealRepository } from './api/deal/deal-repository.service';
import { UserRepository } from './api/user/user-repository.service';


var routes = [
  {
    path: '',
    component: DealListComponent
  },
  {
    path: 'user',
    component: DealListComponent
  },
  {
    path: 'vendor',
    component: VendorInterfaceComponent
  },
  {
    path:'mysearches',
    component: SearchesComponent
  },
  {
    path: 'signup/:mode',
    component: SignUpComponent
  },
  {
    path:'login',
    component: LoginComponent
  }
]

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    Shared.SharedModule
  ],
  declarations: [
    DealListComponent, SignUpComponent,VendorInterfaceComponent,SearchesComponent,LoginComponent
  ],
  exports: [
      DealListComponent
  ],
  providers: [
      DealRepository
  ]
})

export class DealsModule { }