import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaJuridicaModel } from '../../../models/PessoaJuridicaModel';
import { Observable } from 'rxjs';
import { BaseService } from '../../base.service';

@Injectable({
  providedIn: 'root'
})
export class PessoaJuridicaService {

  constructor( public httpClient: HttpClient, private baseService: BaseService) { }

  Cadastrar(pessoaJuridica: PessoaJuridicaModel): Observable<PessoaJuridicaModel> {
    return this.httpClient.post<PessoaJuridicaModel>(`${this.baseService.url}/pessoa-juridica/cadastrar`, pessoaJuridica);
  }

  Editar(pessoaJuridica: PessoaJuridicaModel): Observable<PessoaJuridicaModel> {
    return this.httpClient.put<PessoaJuridicaModel>(`${this.baseService.url}/pessoa-juridica/editar`, pessoaJuridica);
  }

  Inativar(id: string, _:any): Observable<PessoaJuridicaModel> {
    return this.httpClient.put<PessoaJuridicaModel>(`${this.baseService.url}/pessoa-juridica/inativar/${id}`, _);
  }

  Listar(): Observable<PessoaJuridicaModel[]> {
    return this.httpClient.get<PessoaJuridicaModel[]>(`${this.baseService.url}/pessoa-juridica/ativas`);
  }

  PessoaFisica(id: string): Observable<PessoaJuridicaModel> {
    return this.httpClient.get<PessoaJuridicaModel>(`${this.baseService.url}/pessoa-juridica/${id}`);
  }
}
