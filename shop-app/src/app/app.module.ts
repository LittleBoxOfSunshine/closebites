import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-page/product-list/product-list.component';
import { ProductComponent } from './product-page/product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartListComponent } from './cart-page/cart-list/cart-list.component';
import { CartComponent } from './cart-page/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductComponent,
    NavbarComponent,
    CartPageComponent,
    CartListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
