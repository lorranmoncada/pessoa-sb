import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'pessoa-fisica',
    pathMatch: 'full'
  },
  {path: 'pessoa-fisica', loadChildren:() => import('./pages/pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaModule) },
  {path: 'pessoa-juridica', loadChildren:() => import('./pages/pessoa-juridica/pessoa-juridica.module').then(m => m.PessoaJuridicaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
