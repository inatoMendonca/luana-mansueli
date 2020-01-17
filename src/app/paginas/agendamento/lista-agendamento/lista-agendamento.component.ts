import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-agendamento',
  templateUrl: './lista-agendamento.component.html',
  styleUrls: ['./lista-agendamento.component.css']
})
export class ListaAgendamentoComponent implements OnInit {

  public agendamentos: Agendamento[];
  pag = 1 ;
  contador = 7;

  deleteModalRef: BsModalRef;

  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  constructor(private agendamentoService: AgendamentoService, private modalService: BsModalService) {  }

  @Input() agendamento: Agendamento = {} as Agendamento;
  agendamentoExcluir: number;

  ngOnInit() {
    this.buscarTodos();
  }

  onSubmit(name: string, date: Date) {

    if (name && !date) {
      console.log(name);
      this.agendamentoService.buscarNome(name).subscribe((agendamentos: Agendamento[]) => {
        this.agendamentos = agendamentos;
      }, () => { this.errorMsgComponent.setError('FALHA!!!'); });
    }

    if (!name && date) {
      this.agendamentoService.buscarData(date).subscribe((agendamentos: Agendamento[]) => {
        this.agendamentos = agendamentos;
      });
    }
  }

  buscarTodos() {
    this.agendamentoService.buscarTodos().subscribe((agendamentos: Agendamento[]) => {
      this.agendamentos = agendamentos; // Executa o primeiro callback retornando um array de agendamentos como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os agendamentos'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.agendamentoExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.agendamentoService.excluir(this.agendamentoExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar agendamento'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemAgendamentos(): boolean {
    return this.agendamentos && this.agendamentos.length > 0;
  }

}
