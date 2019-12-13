import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug/debug.component';
import { ModelosAparelhosService } from './service/modelos-aparelhos.service';
import { PlanosDadosService } from './service/planos-dados.service';

@NgModule({
  declarations: [DebugComponent],
  exports: [DebugComponent],
  imports: [
    CommonModule
  ],
  providers: [ModelosAparelhosService, PlanosDadosService]
})
export class SharedModule { }
