import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
