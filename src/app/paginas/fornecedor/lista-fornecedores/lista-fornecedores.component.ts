import { Component, OnInit, ViewChild } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Fornecedor } from 'src/app/interfaces/fornecedor';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-fornecedores',
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.css']
})
export class ListaFornecedoresComponent implements OnInit {

  public fornecedores: Fornecedor[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  pag = 1 ;
  contador = 5;
  deleteModalRef: BsModalRef;

  constructor(private servicoService: FornecedorService, private modalService: BsModalService) {  }

  fornecedorExcluir: number;
  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.servicoService.buscarTodos().subscribe((fornecedores: Fornecedor[]) => {
      this.fornecedores = fornecedores; // Executa o primeiro callback retornando um array de fornecedores como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os serviços'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.fornecedorExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.servicoService.excluir(this.fornecedorExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar o Fornecedor'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemServicos(): boolean {
    return this.fornecedores && this.fornecedores.length > 0;
  }


}
