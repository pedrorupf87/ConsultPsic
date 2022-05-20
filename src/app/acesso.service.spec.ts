/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AcessoService } from './acesso.service';

describe('Service: Acesso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcessoService]
    });
  });

  it('should ...', inject([AcessoService], (service: AcessoService) => {
    expect(service).toBeTruthy();
  }));
});
