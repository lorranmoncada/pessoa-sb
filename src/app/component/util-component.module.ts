import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast/toast-container.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    ToastContainerComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ToastContainerComponent, LoadingComponent]
})
export class ToastContainerModule { }