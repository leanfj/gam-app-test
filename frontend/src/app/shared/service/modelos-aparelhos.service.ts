import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelosAparelhosService {

  constructor() { }

  getModelosAparelhos() {
    return [
      "Iphone 8 64GB",
      "Iphone 7 32GB",
      "Iphone XR 128GB",
      "Iphone XS 256GB",
      "Galaxy A50",
      "Galaxy S10",
      "Galaxy S10e"
    ];
  }
}
