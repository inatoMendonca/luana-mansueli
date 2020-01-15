import { Component, ViewChild, } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ServicoService } from 'src/app/services/servico.service';
import { Router } from '@angular/router';
import { Servico } from 'src/app/interfaces/servico';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-criar-servico',
  templateUrl: './criar-servico.component.html',
  styleUrls: ['./criar-servico.component.css']
})
export class CriarServicoComponent  {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereServico: Servico;

  constructor(private servicoService: ServicoService, private router: Router, private modalService: BsModalService) { }

  criar(servico: Servico) {
    this.insereServico = servico;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});
  }

  confirmaInsercao() {
    this.servicoService.criar(this.insereServico).subscribe (
      () => {this.router.navigateByUrl('cadastro/servicos');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação do Serviço'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }

}
