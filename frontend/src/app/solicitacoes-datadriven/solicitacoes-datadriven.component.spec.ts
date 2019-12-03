import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesDatadrivenComponent } from './solicitacoes-datadriven.component';

describe('SolicitacoesDatadrivenComponent', () => {
  let component: SolicitacoesDatadrivenComponent;
  let fixture: ComponentFixture<SolicitacoesDatadrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitacoesDatadrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesDatadrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
