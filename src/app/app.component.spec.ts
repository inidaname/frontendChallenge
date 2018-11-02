import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RegisterComponent } from './routes/register/register.component';
import { HomeComponent } from './routes/home/home.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent
      ],
    }).compileComponents();
  }));
});
