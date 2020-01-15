import { Component, ViewChild } from '@angular/core';
import { Servico } from 'src/app/interfaces/servico';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ServicoService } from 'src/app/services/servico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent {

  alterarServico: Servico;
  alteraModalRef: BsModalRef;

  public servico: Servico;
  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;

  // tslint:disable-next-line: max-line-length
  constructor(private servicoService: ServicoService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.servicoService.buscarUm(id).subscribe(
      (servico: Servico) => {this.servico = servico; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Serviço'); });
  }

  atualizar(servico: Servico) {
    this.alterarServico = servico;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.servicoService.atualizar(this.alterarServico).subscribe(
      () => {this.router.navigateByUrl('cadastro/servicos'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Serviço'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }
}
