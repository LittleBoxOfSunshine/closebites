import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import * as Shared from '../shared/index';

import { DealListComponent } from './deal-list/deal-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchesComponent } from './searches/searches.component';
import { BusinessInterfaceComponent } from './business-interface/business-interface.component';

import { DealRepository } from './api/deal-repository.service';


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
    path: 'business',
    component: BusinessInterfaceComponent
  },
  {
    path:'mysearches',
    component: SearchesComponent
  },
  {
    path: 'signup/:mode',
    component: SignUpComponent
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
    DealListComponent, SignUpComponent,BusinessInterfaceComponent,SearchesComponent
  ],
  exports: [
      DealListComponent
  ],
  providers: [
      DealRepository
  ]
})

export class DealsModule { }