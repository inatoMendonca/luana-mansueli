import { Component, ViewChild, } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/interfaces/fornecedor';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-criar-fornecedor',
  templateUrl: './criar-fornecedor.component.html',
  styleUrls: ['./criar-fornecedor.component.css']
})
export class CriarFornecedorComponent {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereFornecedor: Fornecedor;

  constructor(private fornecedorService: FornecedorService, private router: Router, private modalService: BsModalService) { }

  criar(fornecedor: Fornecedor) {
    this.insereFornecedor = fornecedor;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});
  }

  confirmaInsercao() {
    this.fornecedorService.criar(this.insereFornecedor).subscribe (
      () => {this.router.navigateByUrl('cadastro/fornecedores');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação do Fornecedor'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }

}
