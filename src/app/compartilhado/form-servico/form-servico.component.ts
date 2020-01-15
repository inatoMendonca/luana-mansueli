import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Servico } from 'src/app/interfaces/servico';

@Component({
  selector: 'app-form-servico',
  templateUrl: './form-servico.component.html',
  styleUrls: ['./form-servico.component.css']
})
export class FormServicoComponent {

  @Input() servico: Servico = {} as Servico;
  @Output() outputServico: EventEmitter<Servico> = new EventEmitter();

  onSubmit() {
    this.outputServico.emit(this.servico);
  }

}
