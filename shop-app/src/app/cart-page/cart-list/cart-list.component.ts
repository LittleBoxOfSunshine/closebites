import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart-service';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../../model/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers:[CartService]
})
export class CartListComponent implements OnInit {
  public cartArr: Product[];
  public product: Product;
  public total: number;

  constructor(
    private cartService: CartService
  ) {
    this.cartArr = [];
  }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart('user')
                    .subscribe(data => {
                      this.total = 0;
                      for(var i = 0; i < data.length; i++) {
                        this.product = new Product(data[i].item_fk.name, data[i].item_fk.description, data[i].item_fk.price, data[i].numToPurchase);
                        this.cartArr.unshift(this.product);
                        this.total += (data[i].item_fk.price * data[i].numToPurchase);
                      }
                    }, error => {
                      console.log(error);
                    });
  }

}
