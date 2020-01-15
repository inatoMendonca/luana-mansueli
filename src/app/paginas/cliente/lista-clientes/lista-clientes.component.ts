import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public clientes: Cliente[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  pag = 1 ;
  contador = 5;
  deleteModalRef: BsModalRef;

  constructor(private clienteService: ClienteService, private modalService: BsModalService) {  }

  clienteExcluir: number;
  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.clienteService.buscarTodos().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes; // Executa o primeiro callback retornando um array de clientes como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os clientes'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.clienteExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.clienteService.excluir(this.clienteExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar o Cliente'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemClientes(): boolean {
    return this.clientes && this.clientes.length > 0;
  }

}
