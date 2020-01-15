import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent {

  @Input() cliente: Cliente = {} as Cliente;
  @Output() outputCliente: EventEmitter<Cliente> = new EventEmitter();

  onSubmit() {
    this.outputCliente.emit(this.cliente);
  }

}
