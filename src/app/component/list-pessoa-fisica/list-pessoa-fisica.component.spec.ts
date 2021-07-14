import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPessoaFisicaComponent } from './list-pessoa-fisica.component';

describe('ListPessoaFisicaComponent', () => {
  let component: ListPessoaFisicaComponent;
  let fixture: ComponentFixture<ListPessoaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPessoaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
