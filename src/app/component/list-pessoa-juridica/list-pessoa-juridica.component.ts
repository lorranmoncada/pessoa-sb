import { Component, EventEmitter, Input, OnInit, Output, PipeTransform } from '@angular/core';

@Component({
  selector: 'list-pessoa-fisica',
  templateUrl: './list-pessoa-juridica.component.html',
  styleUrls: ['./list-pessoa-juridica.component.sass'],
})
export class ListPessoaJuridicaComponent implements OnInit {
  
  @Input() pessoasJuridicas = [] as any[];
  @Output() obterPessoaJuridica = new EventEmitter();
  @Output() inativar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
   console.log(this.pessoasJuridicas)
  }

  emitPessoaJuridicaId(id: string){
    this.obterPessoaJuridica.emit(id);
  }

  emitInativarPessoaJuridica(id: string){
    this.inativar.emit(id);
  }
}

