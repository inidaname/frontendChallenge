import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import {  NgxPaginationModule } from 'ngx-pagination';
import { NgbRootModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientModule,
        NgxPaginationModule,
        NgbRootModule,
        RouterModule,
        RouterTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call product list', () => {
    expect(component.results.length).toBeGreaterThanOrEqual(0);
  });

  it('should create a grid box for each resutl', () => {
    if (!component.results) {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.getElementsByClassName('result').length).toBeLessThan(1);
    }
  });

  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });
});
