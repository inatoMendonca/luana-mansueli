import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereCliente: Cliente;
  
  constructor(private clienteService: ClienteService, private router: Router, private modalService: BsModalService) { }

  criar(servico: Cliente) {

    this.insereCliente = servico;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});

  }

  confirmaInsercao() {
    this.clienteService.criar(this.insereCliente).subscribe (
      () => {this.router.navigateByUrl('cadastro/clientes');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação do Cliente'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }

}
