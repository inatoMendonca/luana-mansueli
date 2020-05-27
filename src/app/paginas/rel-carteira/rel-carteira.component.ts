import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rel-carteira',
  templateUrl: './rel-carteira.component.html',
  styleUrls: ['./rel-carteira.component.css']
})
export class RelCarteiraComponent implements OnInit {

  public agendamentos: Agendamento[];
  pag = 1 ;
  contador = 5;

  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;

  constructor(private agendamentoService: AgendamentoService, private modalService: BsModalService) { }

  ngOnInit() {
  }

}
