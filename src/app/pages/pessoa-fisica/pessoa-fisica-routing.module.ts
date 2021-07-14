import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaFisicaComponent } from './pessoa-fisica.component';

const routes: Routes = [{ path: '', component: PessoaFisicaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaFisicaRoutingModule { }
