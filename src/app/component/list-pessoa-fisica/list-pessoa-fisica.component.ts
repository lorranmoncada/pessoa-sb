import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-pessoa-fisica',
  templateUrl: './list-pessoa-fisica.component.html',
  styleUrls: ['./list-pessoa-fisica.component.sass']
})
export class ListPessoaFisicaComponent implements OnInit {

  @Input() pessoasFisicas = [] as any[];
  @Output() obterPessoaFisica = new EventEmitter();
  @Output() inativar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  emitPessoaFisicaId(id: string){
    this.obterPessoaFisica.emit(id);
  }

  emitInativarPessoaFisica(id: string){
    this.inativar.emit(id);
  }
}
