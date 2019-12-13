import { TestBed } from '@angular/core/testing';

import { PlanosDadosService } from './planos-dados.service';

describe('PlanosDadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanosDadosService = TestBed.get(PlanosDadosService);
    expect(service).toBeTruthy();
  });
});
