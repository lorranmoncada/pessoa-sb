import { PessoaModel } from "./PessoaModel";

export interface PessoaFisicaModel extends PessoaModel {
    nome: string;
    cpf: string
}