import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolicitacoesDatadrivenComponent } from './solicitacoes-datadriven/solicitacoes-datadriven.component';
import { DebugComponent } from './shared/debug/debug.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitacoesComponent,
    SolicitacoesDatadrivenComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
