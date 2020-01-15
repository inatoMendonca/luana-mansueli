import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { Profissional } from 'src/app/interfaces/profissional';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-criar-profissional',
  templateUrl: './criar-profissional.component.html',
  styleUrls: ['./criar-profissional.component.css']
})
export class CriarProfissionalComponent {

  @ViewChild(ErrorMsgComponent, {static: false}) erroMsgComponent: ErrorMsgComponent;
  @ViewChild('insereModal', {static: false}) insereModal;

  insereModalRef: BsModalRef;
  insereProfissional: Profissional;
  constructor(private profissionalService: ProfissionalService, private router: Router, private modalService: BsModalService) { }

  criar(profissional: Profissional) {
    this.insereProfissional = profissional;
    this.insereModalRef = this.modalService.show(this.insereModal, {class: 'modal-sm'});
  }

  confirmaInsercao() {
    this.profissionalService.criar(this.insereProfissional).subscribe (
      () => {this.router.navigateByUrl('cadastro/profissionais');  this.insereModalRef.hide(); },
      () => {this.erroMsgComponent.setError('Falha na criação do Profissional'); }
    );
  }

  cancelaInsercao() {
    this.insereModalRef.hide();
  }
}
