import { Component, ViewChild } from '@angular/core';
import { Profissional } from 'src/app/interfaces/profissional';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-editar-profissional',
  templateUrl: './editar-profissional.component.html',
  styleUrls: ['./editar-profissional.component.css']
})
export class EditarProfissionalComponent {

  public profissional: Profissional;

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('alteraModal', {static: false}) alteraModal;
  alterarProfissional: Profissional;
  alteraModalRef: BsModalRef;

  // tslint:disable-next-line: max-line-length
  constructor(private profissionalService: ProfissionalService, private activatedRoute: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.buscarUm(this.activatedRoute.snapshot.params.id);
  }

  buscarUm(id: number) {
    this.profissionalService.buscarUm(id).subscribe(
      (profissional: Profissional) => {this.profissional = profissional; },
      () => {this.erroMsgComponent.setError('Falha ao buscar o Profissional'); });
  }

  atualizar(profissional: Profissional) {
    this.alterarProfissional = profissional;
    this.alteraModalRef = this.modalService.show(this.alteraModal, {class: 'modal-sm'});
  }

  confirmaAlteracao() {
    this.profissionalService.atualizar(this.alterarProfissional).subscribe(
      () => {this.router.navigateByUrl('cadastro/profissionais'); this.alteraModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha ao atualizar o Profissional'); });
  }

  cancelaAlteracao() {
    this.alteraModalRef.hide();
  }

}
