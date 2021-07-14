import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaJuridicaComponent } from './pessoa-juridica.component';

const routes: Routes = [{ path: '', component: PessoaJuridicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaJuridicaRoutingModule { }
