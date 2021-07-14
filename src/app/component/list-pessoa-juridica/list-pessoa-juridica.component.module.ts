import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPessoaJuridicaComponent } from './list-pessoa-juridica.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [ListPessoaJuridicaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ListPessoaJuridicaComponent]
})
export class ListPessoaJuridicaComponentModule { }