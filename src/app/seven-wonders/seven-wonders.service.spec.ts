import { TestBed, inject } from '@angular/core/testing';

import { SevenWondersService } from './seven-wonders.service';

describe('SevenWondersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SevenWondersService]
    });
  });

  it('should be created', inject([SevenWondersService], (service: SevenWondersService) => {
    expect(service).toBeTruthy();
  }));
});
