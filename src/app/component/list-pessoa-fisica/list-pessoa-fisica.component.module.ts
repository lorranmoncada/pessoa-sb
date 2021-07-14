import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListPessoaFisicaComponent } from './list-pessoa-fisica.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [ListPessoaFisicaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ListPessoaFisicaComponent]
})
export class ListPessoaFisicaComponentModule { }