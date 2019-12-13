import { TestBed } from '@angular/core/testing';

import { ModelosAparelhosService } from './modelos-aparelhos.service';

describe('ModelosAparelhosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelosAparelhosService = TestBed.get(ModelosAparelhosService);
    expect(service).toBeTruthy();
  });
});
