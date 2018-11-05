import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Products } from 'src/app/interface/products';
import { ShareService } from 'src/app/services/share.service';

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  list: any;
  startDate = null;
  endDate: Date = new Date();
  filteredProducts: Products[];
  results: Products[] = [];
  errorMessage;

  public get listFilter(): any {
      return this.list;
  }

  public set listFilter(v: any) {
      this.list = v;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.results;
  }


  constructor(
    private products: ProductsService,
    private sortdata: ShareService
  ) { }

  ngOnInit() {
    this.products.getProducts().subscribe(
        (result: Products[]) => {
        this.results = result;
        this.filteredProducts = this.results;
      },
      error => this.errorMessage = <any>error
    );

    this.sortdata.dateList.subscribe(re =>  {
      if (re !== null) {
        this.listFilter = re;
      }
    });
  }

  performFilter(filterBy: any): Products[] {
    if (filterBy.type === 'start') {
      this.startDate = new Date(filterBy.dateString);
    }

    if (filterBy.type === 'end') {
      this.endDate = new Date(filterBy.dateString);
    }
    const filteredResult = this.results.filter(
        (product: Products) => {
          const fromDate = new Date(product.start_date);
          const toDate = new Date(product.end_date);
          if (fromDate >= this.startDate && toDate <= this.endDate) {
            return product;
          }
      });

      return (filteredResult.length >= 1) ? filteredResult : this.results;
  }
}
