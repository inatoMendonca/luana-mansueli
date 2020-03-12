import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Agendamento } from 'src/app/interfaces/agendamento';

@Component({
  selector: 'app-lanca-agendamento',
  templateUrl: './lanca-agendamento.component.html',
  styleUrls: ['./lanca-agendamento.component.css']
})
export class LancaAgendamentoComponent {

  lancarAgendamento: Agendamento;
  lancaModalRef: BsModalRef;
  geraPDF: BsModalRef;

  public agendamento: Agendamento;
  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('lancaModal', {static: false}) lancaModal;
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
    this.lancarAgendamento = agendamento;
    this.lancaModalRef = this.modalService.show(this.lancaModal, {class: 'modal-sm'});
  }

  confirmaLancamento(template: TemplateRef<any>) {
    this.geraPDF = this.modalService.show(template, {class: 'second'});
    this.agendamentoService.atualizar(this.lancarAgendamento).subscribe(
      () => {this.router.navigateByUrl('cadastro/agendamentos'); this.lancaModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao lançar o Agendamento'); });
  }

  cancelaLancamento() {
    this.lancaModalRef.hide();
  }

  cancelaPDF() {
    this.geraPDF.hide();
    this.lancaModalRef.hide();
  }

  confirmaPDF() {
    this.agendamentoService.buscarUm(this.lancarAgendamento.idAgendamento).subscribe(
      () => {this.router.navigateByUrl(`cadastro/agendamentos/imprimir/${this.lancarAgendamento.idAgendamento}/
                                        ${this.lancarAgendamento.nomeCliente}/
                                        ${this.lancarAgendamento.nomeProfissional}/
                                        ${this.lancarAgendamento.valorAgendamento}/
                                        ${this.lancarAgendamento.nomeServico}/
                                        ${this.lancarAgendamento.diaAgendamento}/
                                        ${this.lancarAgendamento.formaPagamento}`); this.geraPDF.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao lançar o Agendamento'); });
    console.log(this.lancarAgendamento.idAgendamento);
    console.log(this.lancarAgendamento.nomeCliente);
  }

}
