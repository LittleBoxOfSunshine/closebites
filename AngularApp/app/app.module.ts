import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { DealsModule } from './deals/deals.module';

import * as Shared from './shared/index';


@NgModule({
  imports:      [ 
  	BrowserModule,
    DealsModule,
    RouterModule,
    Shared.SharedModule
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }