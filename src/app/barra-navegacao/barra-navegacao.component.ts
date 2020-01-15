import { Component, ViewChild } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Agendamento } from '../interfaces/agendamento';
import { ErrorMsgComponent } from '../compartilhado/error-msg/error-msg.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent {

  public agendamentos: Agendamento[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;

  constructor(private agendamentoService: AgendamentoService) { }

  atualizaLista() {
    this.agendamentoService.buscarTodos().subscribe((agendamentos: Agendamento[]) => {
      this.agendamentos = agendamentos; // Executa o primeiro callback retornando um array de agendamentos como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os agendamentos'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

}
