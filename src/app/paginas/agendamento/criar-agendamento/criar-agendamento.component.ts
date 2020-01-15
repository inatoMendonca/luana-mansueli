import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-criar-agendamento',
  templateUrl: './criar-agendamento.component.html',
  styleUrls: ['./criar-agendamento.component.css']
})
export class CriarAgendamentoComponent {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereAgendamento: Agendamento;

  constructor(private agendamentoService: AgendamentoService, private router: Router, private modalService: BsModalService) { }

  criar(agendamento: Agendamento) {

    this.insereAgendamento = agendamento;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});

  }

  confirmaInsercao() {
    this.agendamentoService.criar(this.insereAgendamento).subscribe (
      () => {this.router.navigateByUrl('home');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação do Agendamento'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }

}
