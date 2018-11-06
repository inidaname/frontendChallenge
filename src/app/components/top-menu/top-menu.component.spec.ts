import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgbRootModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TopMenuComponent } from './top-menu.component';
import { ShareService } from 'src/app/services/share.service';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuComponent ],
      imports: [ RouterModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Top Menu', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the Nav bar text Front End Challenge', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Front End Challenge');
  });

  it('should have user email', inject([ShareService], (service: ShareService) => {
    expect(service).toBeTruthy();
    let user = component.user;
    const mockObj = {
      email: 'something@another.yes',
      password: '12345678',
      confirmPassword: '12345678'
    };
    service.registerUser(mockObj);

    service.userData.subscribe(result => user = result);
    expect(user.email).toContain('something@another.yes');
  }));

  it('should log out user', inject([ShareService], (service: ShareService) => {
    expect(service).toBeTruthy();
    let user = component.user;
    const mockObj = {
      email: 'something@another.yes',
      password: '12345678',
      confirmPassword: '12345678'
    };
    service.registerUser(mockObj);

    // check if it registered
    service.userData.subscribe(result => user = result);
    expect(user.email).toContain('something@another.yes');

    // then set it back to null
    component.logOut();
    service.userData.subscribe(result => user = result);
    expect(user).toBeNull();
  }));
});
