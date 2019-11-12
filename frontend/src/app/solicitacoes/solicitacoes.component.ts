import { Component, OnInit, Injectable, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';

import { NgbDatepickerI18n, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'pt-br': {
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
};

const DATA = [
  {
    id: 1,
    numeroChamado: "SR123456",
    nomeUsuario: "Fulano de Tal",
    matricula: "222355",
    cargoUsuario: "Analista",
    nomeSolicitante: "Zé da Coves",
    arDebito: "123456",
    dataSolicitacao: "09-11-2019",
    modeloAparelho: "Iphone 8 64GB",
    observacoes: "Usando apareloh backup"
  },
  {
    id: 2,
    numeroChamado: "SR098722",
    nomeUsuario: "Carlos de Tal",
    matricula: "111355",
    cargoUsuario: "Contador",
    nomeSolicitante: "Ana neves",
    arDebito: "456333",
    dataSolicitacao: "05-11-2019",
    modeloAparelho: "Iphone 8 64GB",
    observacoes: "Usando apareloh backup"
  },
  {
    id: 3,
    numeroChamado: "SR10982",
    nomeUsuario: "Ana de Tal",
    matricula: "555355",
    cargoUsuario: "Engenheiro",
    nomeSolicitante: "Zé da Coves",
    arDebito: "398776",
    dataSolicitacao: "09-11-2019",
    modeloAparelho: "Iphone 8 64GB",
    observacoes: "Usando apareloh backup"
  },
  {
    id: 4,
    numeroChamado: "SR10982",
    nomeUsuario: "Ana de Tal",
    matricula: "555355",
    cargoUsuario: "Engenheiro",
    nomeSolicitante: "Zé da Coves",
    arDebito: "398776",
    dataSolicitacao: "09-11-2019",
    modeloAparelho: "Iphone 8 64GB",
    observacoes: "Usando apareloh backup"
  },
  {
    id: 5,
    numeroChamado: "SR10982",
    nomeUsuario: "Ana de Tal",
    matricula: "555355",
    cargoUsuario: "Engenheiro",
    nomeSolicitante: "Zé da Coves",
    arDebito: "398776",
    dataSolicitacao: "09-11-2019",
    modeloAparelho: "Iphone 8 64GB",
    observacoes: "Usando apareloh backup"
  },
];


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

  constructor() { }

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

  rows = DATA;
}
