import { Component, OnInit, ViewChild } from '@angular/core';
import { Profissional } from 'src/app/interfaces/profissional';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-profissionais',
  templateUrl: './lista-profissionais.component.html',
  styleUrls: ['./lista-profissionais.component.css']
})
export class ListaProfissionaisComponent implements OnInit {

  public profissionais: Profissional[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  pag = 1 ;
  contador = 5;
  deleteModalRef: BsModalRef;

  constructor(private profissionalService: ProfissionalService, private modalService: BsModalService) {  }

  profissionalExcluir: number;
  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.profissionalService.buscarTodos().subscribe((profissionais: Profissional[]) => {
      this.profissionais = profissionais; // Executa o primeiro callback retornando um array de profissionais como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os profissionais'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.profissionalExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.profissionalService.excluir(this.profissionalExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar Profissional'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemProfissionais(): boolean {
    return this.profissionais && this.profissionais.length > 0;
  }
}
