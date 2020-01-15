import { Component, ViewChild } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.css']
})
export class EditarAgendamentoComponent {

  alterarAgendamento: Agendamento;
  alteraModalRef: BsModalRef;

  public agendamento: Agendamento;
  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;
  // tslint:disable-next-line: max-line-length
  constructor(private agendamentoService: AgendamentoService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.agendamentoService.buscarUm(id).subscribe(
      (agendamento: Agendamento) => {this.agendamento = agendamento; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Agendamento'); });
  }

  atualizar(agendamento: Agendamento) {
    this.alterarAgendamento = agendamento;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.agendamentoService.atualizar(this.alterarAgendamento).subscribe(
      () => {this.router.navigateByUrl('cadastro/agendamentos'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Agendamento'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }
}
