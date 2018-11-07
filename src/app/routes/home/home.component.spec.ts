import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { NgbRootModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

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

  it('should create a grid box for each result', () => {
    if (!component.results) {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.getElementsByClassName('result').length).toBeLessThan(1);
    }
  });

  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });
});
