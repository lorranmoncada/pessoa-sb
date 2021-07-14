import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PessoaJuridicaModel } from 'src/app/models/PessoaJuridicaModel';
import { PessoaJuridicaService } from 'src/app/services/domain-services/pessoa-juridica-service/pessoa-juridica.service';
import { take } from 'rxjs/operators'
import { ToastService } from 'src/app/services/toast-service/toast.service';
import { LoadingService } from 'src/app/services/loading-service/loading.service';

@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.sass']
})
export class PessoaJuridicaComponent implements OnInit {

  formJuridico = {} as FormGroup;
  pessoaJuridica = {} as PessoaJuridicaModel;
  pessoasJuridicas$ = new Observable<PessoaJuridicaModel[]>();
  isEditar = false;
  loading$ = this.loader.loading$;

  constructor(
    public loader: LoadingService,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private pessoaJuridicaService: PessoaJuridicaService) {}

  ngOnInit(): void {
    this.buildForm();
    this.getPessoasJuridicas();
  }

  buildForm(): void {
    this.formJuridico = this.formBuilder.group({
      razaoSocial: [this.pessoaJuridica.razaoSocial, Validators.required],
      cnpj: [this.pessoaJuridica.cnpj, Validators.required],
      contato: [this.pessoaJuridica.contato, Validators.required],
      endereco: [this.pessoaJuridica.endereco, Validators.required]
    });
  }

 async getPessoasJuridicas() {
    this.loader.show();
    this.pessoasJuridicas$ = this.pessoaJuridicaService.Listar();
    if (await this.pessoasJuridicas$.toPromise()){
      this.loader.hide();
    }
  }

  obterPessoaJuridica(id: string) {
    this.isEditar = true;
    this.pessoaJuridicaService.PessoaFisica(id).pipe(take(1)).subscribe(data => {
      Object.assign(this.pessoaJuridica, data)
      this.buildForm();
    }, msg => {
      this.toastService.showErros(msg.error);
    })
  }

  inativar(id: string) {
    this.loader.show();
    this.pessoaJuridicaService.Inativar(id, null).pipe(take(1)).subscribe(_ => {
      this.toastService.show('Inativado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
      this.loader.hide();
      this.getPessoasJuridicas();
    }, msg => {
      this.loader.hide();
      this.toastService.showErros(msg.error);
    });
  }

  onSubmit(form: FormGroup): void {
    if (!this.isEditar) {
      this.loader.show();
      this.pessoaJuridica.id = '';
      this.pessoaJuridicaService.Cadastrar(Object.assign(this.pessoaJuridica, form.value)).subscribe(_ => {
        this.loader.hide();
        this.toastService.show('Cadastrado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
        this.getPessoasJuridicas();
        this.formJuridico.reset();
      }, msg => {
        this.loader.hide();
        this.toastService.showErros(msg.error);
      });
    } else {
      var pessoaJuridicaAux = Object.assign(this.pessoaJuridica, form.value);
      pessoaJuridicaAux.ativo = pessoaJuridicaAux.ativo === 'S' ? true : false
      this.pessoaJuridicaService.Editar(pessoaJuridicaAux).subscribe(_ => {
        this.toastService.show('Editado com sucesso', { classname: 'bg-success text-light', delay: 3000 });
        this.loader.hide();
        this.getPessoasJuridicas();
        this.formJuridico.reset();
        this.isEditar = false;
      }, msg => {
        this.loader.hide();
        this.toastService.showErros(msg.error);
      })
    }
  }

}
