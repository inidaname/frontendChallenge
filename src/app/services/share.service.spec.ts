import { TestBed, inject } from '@angular/core/testing';

import { ShareService } from './share.service';

describe('ShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareService]
    });
  });

  it('should be created ShareService', inject([ShareService], (service: ShareService) => {
    expect(service).toBeTruthy();
  }));

  it('should User Data be null at instance', inject([ShareService], (service: ShareService) => {
    service.userData.subscribe(result => {
      expect(result).toBeNull();
    });
  }));
});
