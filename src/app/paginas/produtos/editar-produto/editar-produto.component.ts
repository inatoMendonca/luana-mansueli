import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {

  public produto: Produto;
  alterarProduto: Produto;
  alteraModalRef: BsModalRef;

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;
  // tslint:disable-next-line: max-line-length
  constructor(private produtoService: ProdutoService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.produtoService.buscarUm(id).subscribe(
      (produto: Produto) => {this.produto = produto; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Produto'); });
  }

  atualizar(produto: Produto) {
    this.alterarProduto = produto;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.produtoService.atualizar(this.alterarProduto).subscribe(
      () => {this.router.navigateByUrl('cadastro/produtos'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Produto'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }
}
