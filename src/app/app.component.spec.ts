import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { RegisterComponent } from './routes/register/register.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbRootModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgbRootModule,
        NgxPaginationModule,
        RouterModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        TopMenuComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should contain div with class container', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.container')).toBeTruthy();
  });
});
