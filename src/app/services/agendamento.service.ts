import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento,  } from '../interfaces/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Agendamento[]> {
    const url = `${environment.urlApi}/agendamentos`;
    return this.http.get<Agendamento[]>(url);
  }

  buscarUm(id: number): Observable<Agendamento> {
    const url = `${environment.urlApi}/agendamentos/${id}`;
    return this.http.get<Agendamento>(url);
  }

  buscarNome(nomeCliente: string): Observable<Agendamento[]> {
    console.log(nomeCliente);
    if (nomeCliente != null) {
      console.log('DENTRO DO IF' + nomeCliente);
    }
    const url = `${environment.urlApi}/agendamentos/nome/${nomeCliente}`;
    return this.http.get<Agendamento[]>(url);
  }

  buscarData(diaAgendamento: Date): Observable<Agendamento[]> {
    if (diaAgendamento != null) {
      console.log(diaAgendamento);
    }
    const url = `${environment.urlApi}/agendamentos/data/${diaAgendamento}`;
    return this.http.get<Agendamento[]>(url);
  }

  criar(agendamento: Agendamento): Observable<Agendamento> {
    console.log(agendamento);
    const url = `${environment.urlApi}/agendamentos/`;
    return this.http.post<Agendamento>(url, agendamento);
  }

  atualizar(agendamento: Agendamento): Observable<Agendamento> {
    const url = `${environment.urlApi}/agendamentos/${agendamento.idAgendamento}`;
    return this.http.put<Agendamento>(url, agendamento);
  }

  excluir(id: number): Observable<Agendamento> {
    const url = `${environment.urlApi}/agendamentos/${id}`;
    return this.http.delete<Agendamento>(url);
  }
}
