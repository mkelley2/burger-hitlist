import { TestBed, inject } from '@angular/core/testing';

import { JointsService } from './joints.service';

describe('JointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JointsService]
    });
  });

  it('should ...', inject([JointsService], (service: JointsService) => {
    expect(service).toBeTruthy();
  }));
});
