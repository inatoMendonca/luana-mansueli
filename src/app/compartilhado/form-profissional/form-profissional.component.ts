import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Profissional } from 'src/app/interfaces/profissional';

@Component({
  selector: 'app-form-profissional',
  templateUrl: './form-profissional.component.html',
  styleUrls: ['./form-profissional.component.css']
})
export class FormProfissionalComponent {

  constructor() { }

  @Input() profissional: Profissional = {} as Profissional;
  @Output() outputProfissional: EventEmitter<Profissional> = new EventEmitter();

  onSubmit() {
    this.outputProfissional.emit(this.profissional);
  }
}
