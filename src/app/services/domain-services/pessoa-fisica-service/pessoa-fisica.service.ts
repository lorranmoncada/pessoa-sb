import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaFisicaModel } from 'src/app/models/PessoaFisicaModel';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaFisicaService {

  constructor( public httpClient: HttpClient, private baseService: BaseService) { }

  Cadastrar(pessoaJuridica: PessoaFisicaModel): Observable<PessoaFisicaModel> {
    return this.httpClient.post<PessoaFisicaModel>(`${this.baseService.url}/pessoa-fisica/cadastrar`, pessoaJuridica);
  }

  Editar(pessoaJuridica: PessoaFisicaModel): Observable<PessoaFisicaModel> {
    return this.httpClient.put<PessoaFisicaModel>(`${this.baseService.url}/pessoa-fisica/editar`, pessoaJuridica);
  }

  Inativar(id: string, _:any): Observable<PessoaFisicaModel> {
    return this.httpClient.put<PessoaFisicaModel>(`${this.baseService.url}/pessoa-fisica/inativar/${id}`, _);
  }

  Listar(): Observable<PessoaFisicaModel[]> {
    return this.httpClient.get<PessoaFisicaModel[]>(`${this.baseService.url}/pessoa-fisica/ativas`);
  }

  PessoaFisica(id: string): Observable<PessoaFisicaModel> {
    return this.httpClient.get<PessoaFisicaModel>(`${this.baseService.url}/pessoa-fisica/${id}`);
  }
}
