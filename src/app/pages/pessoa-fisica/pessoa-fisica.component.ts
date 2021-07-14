import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { PessoaFisicaModel } from 'src/app/models/PessoaFisicaModel';
import { PessoaFisicaService } from 'src/app/services/domain-services/pessoa-fisica-service/pessoa-fisica.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';
import { ToastService } from 'src/app/services/toast-service/toast.service';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.sass']
})
export class PessoaFisicaComponent implements OnInit {

  formPessoaFisica = {} as FormGroup;
  pessoaFisica = {} as PessoaFisicaModel;
  pessoasFisicas$ = new Observable<PessoaFisicaModel[]>();
  isEditar = false;
  loading$ = this.loader.loading$;

  constructor(
    public loader: LoadingService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private pessoaFisicaService: PessoaFisicaService) {

  }

  ngOnInit(): void {
    this.buildForm();
    this.getPessoasFisicas();
  }

  buildForm(): void {
    this.formPessoaFisica = this.formBuilder.group({
      nome: [this.pessoaFisica.nome, Validators.required],
      cpf: [this.pessoaFisica.cpf, Validators.required],
      contato: [this.pessoaFisica.contato, Validators.required],
      endereco: [this.pessoaFisica.endereco, Validators.required]
    });
  }

  async getPessoasFisicas() {
    this.loader.show();
    this.pessoasFisicas$ =  this.pessoaFisicaService.Listar();
    if (await this.pessoasFisicas$.toPromise()){
      this.loader.hide();
    }
  }

  obterPessoaFisica(id: string) {
    this.isEditar = true;
    this.pessoaFisicaService.PessoaFisica(id).pipe(take(1)).subscribe(data => {
      Object.assign(this.pessoaFisica, data)
      this.buildForm();
    }, msg => {
      this.toastService.showErros(msg.error);
    })
  }

  inativar(id: string) {
    this.pessoaFisicaService.Inativar(id, null).pipe(take(1)).subscribe(_ => {
      this.toastService.show('Inativado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
      this.getPessoasFisicas()
    }, msg => {
      this.loader.hide();
      this.toastService.showErros(msg.error);
    });
  }

  onSubmit(form: FormGroup): void {
    if (!this.isEditar) {
      this.loader.show();
      this.pessoaFisica.id = '';
      this.pessoaFisicaService.Cadastrar(Object.assign(this.pessoaFisica, form.value)).subscribe(_ => {
        this.toastService.show('Cadastrado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
        this.getPessoasFisicas();
        this.formPessoaFisica.reset();
      }, msg => {
        this.loader.hide();
        this.toastService.showErros(msg.error);
      });
    } else {
      var pessoaFisicaAux = Object.assign(this.pessoaFisica, form.value);
      pessoaFisicaAux.ativo = pessoaFisicaAux.ativo === 'S' ? true : false
      this.pessoaFisicaService.Editar(pessoaFisicaAux).subscribe(_ => {
        this.toastService.show('Alterado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
        /* this.loader.hide(); */
        this.getPessoasFisicas();
        this.formPessoaFisica.reset();
        this.isEditar = false;
      }, msg => {
        this.loader.hide();
        this.toastService.showErros(msg.error);
      })
    }
  }

}
