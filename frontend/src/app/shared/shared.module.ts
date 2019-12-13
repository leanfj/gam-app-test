import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugComponent } from './debug/debug.component';



@NgModule({
  declarations: [DebugComponent],
  exports: [DebugComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
