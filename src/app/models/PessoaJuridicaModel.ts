import { PessoaModel } from "./PessoaModel";

export interface PessoaJuridicaModel extends PessoaModel {
    razaoSocial: string;
    cnpj: string;
}
