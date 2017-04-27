import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../service/shop-service';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ShopService]
})
export class ProductListComponent implements OnInit {
  public productArr: Product[];
  public product: Product;
  constructor(
    private shopService: ShopService
  ) {
    this.productArr = [];
  }

  ngOnInit() {
    //this.shopService.getItems().then(heroes => this.heroes = heroes)
    this.loadProducts();
  }
  loadProducts() {
    this.shopService.getItems1()
                    .subscribe(data => {
                      console.log("-------------------------------------");
                      console.log(data);
                      for(var i = 0; i < data.length; i++) {
                        this.product = new Product(data[i].title, data[i].description, data[i].likes, data[i].created);
                        this.productArr.unshift(this.product)
                      }
                      console.log("arr", this.productArr);
                    }, error => {
                      console.log(error);
                    });
  }

}
