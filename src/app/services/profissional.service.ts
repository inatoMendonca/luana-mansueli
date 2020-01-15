import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profissional } from '../interfaces/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Profissional[]> {
    const url = `${environment.urlApi}/profissionais`;
    return this.http.get<Profissional[]>(url);
  }

  buscarUm(id: number): Observable<Profissional> {
    const url = `${environment.urlApi}/profissionais/${id}`;
    return this.http.get<Profissional>(url);
  }

  criar(profissional: Profissional): Observable<Profissional> {
    const url = `${environment.urlApi}/profissionais/`;
    return this.http.post<Profissional>(url, profissional);
  }

  atualizar(profissional: Profissional): Observable<Profissional> {
    const url = `${environment.urlApi}/profissionais/${profissional.idProfissional}`;
    return this.http.put<Profissional>(url, profissional);
  }

  excluir(id: number): Observable<Profissional> {
    const url = `${environment.urlApi}/profissionais/${id}`;
    return this.http.delete<Profissional>(url);
  }
}
