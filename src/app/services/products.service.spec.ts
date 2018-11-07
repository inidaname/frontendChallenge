import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { environment } from '../../environments/environment';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });
  });


  it('should create Product Service', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return list of product', inject([HttpTestingController, ProductsService],
    (httpMock: HttpTestingController, service: ProductsService) => {
    service.getProducts().subscribe(data => {
      expect(data.length).toBeLessThan(1);
    });

    const req = httpMock.expectOne(environment.fetch);
    expect(req.request.method).toEqual('GET');

    // req.flush({data: ...});
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});
