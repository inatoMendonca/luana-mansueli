import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { ActivatedRoute } from '@angular/router';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-form-recibo',
  templateUrl: './form-recibo.component.html',
  styleUrls: ['./form-recibo.component.css']
})
export class FormReciboComponent implements OnInit {

  id: number;
  profissional: string;
  cliente: string;
  valor: number;
  servico: string;
  data: Date;
  forma: string;

  constructor(private route: ActivatedRoute, private agendamentoService: AgendamentoService) {
    this.id = this.route.snapshot.params.id;
    this.cliente = this.route.snapshot.params.cliente;
    this.profissional = this.route.snapshot.params.profissional;
    this.valor = this.route.snapshot.params.valor;
    this.servico = this.route.snapshot.params.servico;
    this.data = this.route.snapshot.params.data;
    this.forma = this.route.snapshot.params.forma;

  }

  objAgendamento: any;

  @Input() agendamento: Agendamento = {} as Agendamento;
  @Output() outputAgendamento: EventEmitter<Agendamento> = new EventEmitter();

  ngOnInit() {
    this.objAgendamento = this.agendamentoService.buscarUm(this.id);
  }

}
