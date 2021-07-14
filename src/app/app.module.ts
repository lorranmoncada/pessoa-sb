import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PessoaJuridicaService } from './services/domain-services/pessoa-juridica-service/pessoa-juridica.service';
import { HttpClientModule } from '@angular/common/http';
import { PessoaFisicaService } from './services/domain-services/pessoa-fisica-service/pessoa-fisica.service';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    PessoaJuridicaService,
    PessoaFisicaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
