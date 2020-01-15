import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fornecedor } from 'src/app/interfaces/fornecedor';

@Component({
  selector: 'app-form-fornecedor',
  templateUrl: './form-fornecedor.component.html',
  styleUrls: ['./form-fornecedor.component.css']
})
export class FormFornecedorComponent {

  @Input() fornecedor: Fornecedor = {} as Fornecedor;
  @Output() outputFornecedor: EventEmitter<Fornecedor> = new EventEmitter();

  onSubmit() {
    this.outputFornecedor.emit(this.fornecedor);
  }

}
