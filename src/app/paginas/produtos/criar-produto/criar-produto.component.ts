import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereProduto: Produto;
  constructor(private produtoService: ProdutoService, private router: Router, private modalService: BsModalService) { }

  criar(produto: Produto) {
    this.insereProduto = produto;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});
  }

  confirmaInsercao() {
    this.produtoService.criar(this.insereProduto).subscribe (
      () => {this.router.navigateByUrl('cadastro/servicos');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação do Produto'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }
}
