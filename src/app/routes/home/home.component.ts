import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import * as _ from 'underscore';
import { ProductsService } from '../../services/products.service';
import { Products } from 'src/app/interface/products';

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

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  datePicker: NgModel;
  datePicker2: NgModel;

  public get listFilter(): any {
    return this.list;
  }

  public set listFilter(v: any) {
    this.list = v;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.results;
  }

  constructor(private products: ProductsService) {}

  ngOnInit() {
    this.products.getProducts().subscribe(
      (result: Products[]) => {
        this.results = result;
        this.performSort('id');
      },
      error => (this.errorMessage = <any>error)
    );
  }

  performSort(sortParam: string): void {
    this.filteredProducts = _.sortBy(this.results, sortParam);
  }

  performFilter(filterBy: any): Products[] {
    if (filterBy.type === 'start') {
      this.startDate = new Date(filterBy.dateString);
    }

    if (filterBy.type === 'end') {
      this.endDate = new Date(filterBy.dateString);
    }
    const filteredResult = this.results.filter((product: Products) => {
      const fromDate = new Date(product.start_date);
      const toDate = new Date(product.end_date);
      if (fromDate >= this.startDate && toDate <= this.endDate) {
        return product;
      }
    });

    return filteredResult.length >= 1 ? filteredResult : this.results;
  }

  checkDate(date, type): void {
    const dateString: Date = new Date(date.year, date.month, date.day);
    this.listFilter = { dateString, type };
  }
}
