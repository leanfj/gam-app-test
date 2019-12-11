import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { mockSolicitacoes } from "../mockData";

const I18N_VALUES = {
  'pt-br': {
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
};

@Injectable()
export class I18n {
  language = 'pt-br';
}

@Injectable()
export class CustomDatepickerI18n extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.sass'],
  providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }]
})

export class SolicitacoesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  dateModel: NgbDateStruct;

  modelosAparelhos: any = [
    "Iphone 8 64GB",
    "Iphone 7 32GB",
    "Iphone XR 128GB",
    "Iphone XS 256GB",
    "Galaxy A50",
    "Galaxy S10",
    "Galaxy S10e"
  ];

  planosDados: string[] = [
    "Smartphone Tipo 1",
    "Smartphone Tipo 2",
    "Smartphone Tipo 3"
  ]

  rows = mockSolicitacoes;

  onSubmit(formulario) {
    console.log(formulario.value)
  }

  validacaoCampo(campo) {
    return {
      'is-valid': campo.valid && campo.touched,
      'is-invalid': campo.invalid && campo.touched
    }
  }
}
