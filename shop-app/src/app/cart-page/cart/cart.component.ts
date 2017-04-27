import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from '../../service/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  @Input('app-cart') data: Product;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  removeItem(item: string) {
    this.cartService.deleteCartItem(item)
                    .subscribe( data => {

                      },
                      error => {
                    console.log(error);
                  });
  }

}
