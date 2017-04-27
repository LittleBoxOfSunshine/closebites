import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop-service';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers: [ShopService]
})
export class ProductPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
