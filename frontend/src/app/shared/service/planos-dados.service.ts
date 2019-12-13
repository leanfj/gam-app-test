import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanosDadosService {

  constructor() { }

  getPlanoDados() {

    return [
      "Smartphone Tipo 1",
      "Smartphone Tipo 2",
      "Smartphone Tipo 3"
    ]
  }
}
