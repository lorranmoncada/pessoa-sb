import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { PessoaFisicaRoutingModule } from './pessoa-fisica-routing.module';
import { PessoaFisicaComponent } from './pessoa-fisica.component';
import { ListPessoaFisicaComponentModule } from 'src/app/component/list-pessoa-fisica/list-pessoa-fisica.component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastContainerModule } from 'src/app/component/util-component.module';


@NgModule({
  declarations: [
    PessoaFisicaComponent
  ],
  imports: [
    CommonModule,
    PessoaFisicaRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ListPessoaFisicaComponentModule,
    ToastContainerModule
  ]
})
export class PessoaFisicaModule { }
