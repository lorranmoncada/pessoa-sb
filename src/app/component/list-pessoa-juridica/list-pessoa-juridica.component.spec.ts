import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPessoaJuridicaComponent } from './list-pessoa-juridica.component';

describe('ListPessoaJuridicaComponent', () => {
  let component: ListPessoaJuridicaComponent;
  let fixture: ComponentFixture<ListPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPessoaJuridicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
