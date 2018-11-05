import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import {  NgxPaginationModule } from 'ngx-pagination';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule, NgxPaginationModule]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
