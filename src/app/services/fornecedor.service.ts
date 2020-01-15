import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../interfaces/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Fornecedor[]> {
    const url = `${environment.urlApi}/fornecedores`;
    return this.http.get<Fornecedor[]>(url);
  }

  buscarUm(id: number): Observable<Fornecedor> {
    const url = `${environment.urlApi}/fornecedores/${id}`;
    return this.http.get<Fornecedor>(url);
  }

  criar(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${environment.urlApi}/fornecedores/`;
    return this.http.post<Fornecedor>(url, fornecedor);
  }

  atualizar(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${environment.urlApi}/fornecedores/${fornecedor.idFornecedor}`;
    return this.http.put<Fornecedor>(url, fornecedor);
  }

  excluir(id: number): Observable<Fornecedor> {
    const url = `${environment.urlApi}/fornecedores/${id}`;
    return this.http.delete<Fornecedor>(url);
  }
}
