import { Component } from '@angular/core';

@Component ({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent {

  public error: string;

  setError(error: string, tempo: number = 5000) { // Atribui ao atributo da classe o erro, e a 
    this.error = error;                           // função setTimeOut recebe um callback que esvazia o error quando o tempo termina.
    setTimeout(() => {
      this.error = null;
    }, tempo);
  }

}
