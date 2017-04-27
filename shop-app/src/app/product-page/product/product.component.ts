import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';
import { ShopService } from '../../service/shop-service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ShopService]
})
export class ProductComponent implements OnInit {

  @Input('app-product') data: Product;
  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit() {
  }

  purchaseItem(itemname: string) {
    this.shopService.purchaseItem(itemname)
                    .subscribe(data => {
                      console.log(data);
                    }, error => {
                      console.log(error);
                    });
  }
  like(likecounter: number) {
    let num: number = this.data.price;
    this.data.price = num + 1;
  }
}
