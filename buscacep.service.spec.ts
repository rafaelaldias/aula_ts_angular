/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscacepService } from './buscacep.service';

describe('Service: Buscacep', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscacepService]
    });
  });

  it('should ...', inject([BuscacepService], (service: BuscacepService) => {
    expect(service).toBeTruthy();
  }));
});
