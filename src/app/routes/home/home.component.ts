import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Products } from 'src/app/interface/products';

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  results: Products[] = [];

  constructor(
    private products: ProductsService
  ) { }

  ngOnInit() {
    this.products.getProducts().subscribe((res: Products[]) => {
      this.results = res;
    });
  }

}
