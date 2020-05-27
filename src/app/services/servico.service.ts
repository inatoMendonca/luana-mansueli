import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
// import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../interfaces/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  buscarNome(nomeServico: string): Observable<Servico[]> {
    const url = `${environment.urlApi}/servicos/nome/${nomeServico}`;
    return this.http.get<Servico[]>(url);
  }

  buscarTodos(): Observable<Servico[]> {
    const url = `${environment.urlApi}/servicos`;
    return this.http.get<Servico[]>(url);
  }

  buscarUm(id: number): Observable<Servico> {
    const url = `${environment.urlApi}/servicos/${id}`;
    return this.http.get<Servico>(url);
  }

  criar(servico: Servico): Observable<Servico> {
    const url = `${environment.urlApi}/servicos/`;
    return this.http.post<Servico>(url, servico);
  }

  atualizar(servico: Servico): Observable<Servico> {
    const url = `${environment.urlApi}/servicos/${servico.idServico}`;
    return this.http.put<Servico>(url, servico);
  }

  excluir(id: number): Observable<Servico> {
    const url = `${environment.urlApi}/servicos/${id}`;
    return this.http.delete<Servico>(url);
  }

}
