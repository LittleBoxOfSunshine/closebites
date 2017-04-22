import { MockApiService } from './mock-api.service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from './app.component';
import { DealsModule } from './deals/deals.module';

import * as Shared from './shared/index';


@NgModule({
  imports:      [ 
  	BrowserModule,
    DealsModule,
    RouterModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MockApiService),
    Shared.SharedModule
  ],
  declarations: [
  	AppComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }