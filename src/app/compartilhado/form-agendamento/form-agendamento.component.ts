import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/agendamento';

@Component({
  selector: 'app-form-agendamento',
  templateUrl: './form-agendamento.component.html',
  styleUrls: ['./form-agendamento.component.css']
})
export class FormAgendamentoComponent {

  constructor() { }

  @Input() titulo: string;
  @Input() tipo: number;
  @Input() agendamento: Agendamento = {} as Agendamento;
  @Output() outputAgendamento: EventEmitter<Agendamento> = new EventEmitter();

  onSubmit() {
    this.outputAgendamento.emit(this.agendamento);
  }
}
