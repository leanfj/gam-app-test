import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  language = 'pt';
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
  selector: 'app-solicitacoes-datadriven',
  templateUrl: './solicitacoes-datadriven.component.html',
  styleUrls: ['./solicitacoes-datadriven.component.sass']
})

export class SolicitacoesDatadrivenComponent implements OnInit {

  formulario: FormGroup;


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    /*this.formulario = new FormGroup({
      numeroChamado: new FormControl(null)
    })*/

    this.formulario = this.formBuilder.group({
      numeroChamado: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      nomeUsuario: [null, Validators.required],
      matricula: [null, Validators.required],
      cargoUsuario: [null, Validators.required],
      nomeSolicitante: [null, Validators.required],
      arDebito: [null, Validators.required],
      dataSolicitacao: [null, Validators.required],
      modeloAparelho: [null, Validators.required],
      planoDados: [null, Validators.required],
      observacoes: [null],
    })
  }

  dateModel: NgbDateStruct;

  modelosAparelhos: string[] = [
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

  onSubmit() {
    if (this.formulario.valid) {
      this.httpClient.post('https://httpbin.org/post', this.formulario.value).subscribe((data) => {
        console.log(data)
        this.limpaFormulario()
      })

    } else {
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      })
    }
  }

  limpaFormulario() {

    this.formulario.reset();
  }

  validacaoCampo(campo: string) {

    let inputValidado = this.formulario.get(campo);

    return {
      'is-valid': inputValidado.valid && inputValidado.touched,
      'is-invalid': inputValidado.invalid && inputValidado.touched
    }
  }

}
