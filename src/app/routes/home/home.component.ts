import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

import * as _ from 'underscore';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../interface/products';

@Component({
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  list: any;
  fromDate = null;
  toDate: Date = new Date();
  filteredProducts: Products[];
  results: Products[] = [];
  errorMessage;

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  datePicker: NgModel;
  datePicker2: NgModel;
  @ViewChild('listTabs') listTabs;

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
    this.products
      .getProducts()
      .subscribe(
        (result: Products[]) => {
          this.results = result;
          this.filteredProducts = this.results;
        },
        error => (this.errorMessage = <any>error)
      );
  }

  performSort(sortParam: string, event?): void {
    if (this.listTabs) {
      event.preventDefault();
      const children: any[] = this.listTabs.nativeElement.children;
      for (const child of children) {
        const hrefElement = child.querySelector('a');
        if (hrefElement.classList.contains('active')) {
          hrefElement.classList.remove('active');
        }
      }
      event.target.classList.add('active');
    }
    this.filteredProducts = _.sortBy(this.results, sortParam);
  }

  performFilter(filterBy: any): Products[] {
    if (filterBy.type === 'start') {
      this.fromDate = new Date(filterBy.dateString);
    }

    if (filterBy.type === 'end') {
      this.toDate = new Date(filterBy.dateString);
    }
    const filteredResult = this.results.filter((product: Products) => {
      const startDate = new Date(product.start_date);
      const endDate = new Date(product.end_date);
      if (startDate >= this.fromDate && endDate <= this.toDate) {
        return product;
      }
    });

    return filteredResult.length >= 1 ? filteredResult : this.results;
  }

  setDateForFilter(date, type): void {
    const dateString: Date = new Date(date.year, date.month, date.day);
    this.listFilter = { dateString, type };
  }
}
