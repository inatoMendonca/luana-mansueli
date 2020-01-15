import { Component, ViewChild } from '@angular/core';
import { Fornecedor } from 'src/app/interfaces/fornecedor';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent {

  alterarFornecedor: Fornecedor;
  alteraModalRef: BsModalRef;

  public fornecedor: Fornecedor;
  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;

  // tslint:disable-next-line: max-line-length
  constructor(private fornecedorService: FornecedorService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.fornecedorService.buscarUm(id).subscribe(
      (fornecedor: Fornecedor) => {this.fornecedor = fornecedor; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Serviço'); });
  }

  atualizar(fornecedor: Fornecedor) {
    this.alterarFornecedor = fornecedor;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.fornecedorService.atualizar(this.alterarFornecedor).subscribe(
      () => {this.router.navigateByUrl('cadastro/fornecedores'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Fornecedor'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }

}
