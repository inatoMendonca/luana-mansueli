import { Component, ViewChild } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  public cliente: Cliente;
  alterarCliente: Cliente;
  alteraModalRef: BsModalRef;

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;

  // tslint:disable-next-line: max-line-length
  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.clienteService.buscarUm(id).subscribe(
      (cliente: Cliente) => {this.cliente = cliente; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Cliente'); });
  }

  atualizar(cliente: Cliente) {
    this.alterarCliente = cliente;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.clienteService.atualizar(this.alterarCliente).subscribe(
      () => {this.router.navigateByUrl('cadastro/clientes'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Cliente'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }
}
