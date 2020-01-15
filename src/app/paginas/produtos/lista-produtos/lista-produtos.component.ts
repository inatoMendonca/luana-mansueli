import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  public produtos: Produto[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  pag = 1 ;
  contador = 5;
  deleteModalRef: BsModalRef;

  constructor(private produtoservice: ProdutoService, private modalService: BsModalService) {  }

  produtoExcluir: number;
  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.produtoservice.buscarTodos().subscribe((produtos: Produto[]) => {
      this.produtos = produtos; // Executa o primeiro callback retornando um array de produtos como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os produtos'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.produtoExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.produtoservice.excluir(this.produtoExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar o Produto'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemProdutos(): boolean {
    return this.produtos && this.produtos.length > 0;
  }
}
