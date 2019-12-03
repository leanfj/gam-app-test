import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SolicitacoesDatadrivenComponent } from './solicitacoes-datadriven/solicitacoes-datadriven.component';

const routes: Routes = [
  { path: 'solicitacoes', component: SolicitacoesComponent },
  { path: 'solicitacoes-datadriven', component: SolicitacoesDatadrivenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
