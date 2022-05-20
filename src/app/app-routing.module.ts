import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoComponent } from './banco/banco.component';
import { EscolaridadeComponent } from './escolaridade/escolaridade.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';

const routes: Routes = [
  {path: 'banco', component: BancoComponent},
  {path: 'escolaridade', component: EscolaridadeComponent},
  {path: 'especialidade', component: EspecialidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
