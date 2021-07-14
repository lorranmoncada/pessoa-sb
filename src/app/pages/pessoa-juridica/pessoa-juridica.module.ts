import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { PessoaJuridicaRoutingModule } from './pessoa-juridica-routing.module';
import { PessoaJuridicaComponent } from './pessoa-juridica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPessoaJuridicaComponentModule } from 'src/app/component/list-pessoa-juridica/list-pessoa-juridica.component.module';
import { ToastContainerModule } from 'src/app/component/util-component.module';

@NgModule({
  declarations: [
    PessoaJuridicaComponent
  ],
  imports: [
    CommonModule,
    PessoaJuridicaRoutingModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ListPessoaJuridicaComponentModule,
    ToastContainerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PessoaJuridicaComponent]
})
export class PessoaJuridicaModule { }
