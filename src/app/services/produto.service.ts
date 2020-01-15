import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Produto[]> {
    const url = `${environment.urlApi}/produtos`;
    return this.http.get<Produto[]>(url);
  }

  buscarUm(id: number): Observable<Produto> {
    const url = `${environment.urlApi}/produtos/${id}`;
    return this.http.get<Produto>(url);
  }

  criar(produto: Produto): Observable<Produto> {
    const url = `${environment.urlApi}/produtos/`;
    return this.http.post<Produto>(url, produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    const url = `${environment.urlApi}/produtos/${produto.idProduto}`;
    return this.http.put<Produto>(url, produto);
  }

  excluir(id: number): Observable<Produto> {
    const url = `${environment.urlApi}/produtos/${id}`;
    return this.http.delete<Produto>(url);
  }

}
