import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ServicoService } from 'src/app/services/servico.service';
import { Servico } from 'src/app/interfaces/servico';
import { ErrorMsgComponent } from 'src/app/compartilhado/error-msg/error-msg.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.component.html',
  styleUrls: ['./lista-servicos.component.css']
})
export class ListaServicosComponent implements OnInit {

  public servicos: Servico[];
  @ViewChild(ErrorMsgComponent, {static: false}) errorMsgComponent: ErrorMsgComponent;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  pag = 1 ;
  contador = 5;
  deleteModalRef: BsModalRef;

  @Input() servico: Servico = {} as Servico;

  constructor(private servicoService: ServicoService, private modalService: BsModalService) {  }

  servicoExcluir: number;
  ngOnInit() {
    this.buscarTodos();
  }

  onSubmit(name: string) {

    if (name) {
      console.log(name);
      this.servicoService.buscarNome(name).subscribe((servicos: Servico[]) => {
        this.servicos = servicos;
      }, () => { this.errorMsgComponent.setError('FALHA!!!'); });
    }
  }

  buscarTodos() {
    this.servicoService.buscarTodos().subscribe((servicos: Servico[]) => {
      this.servicos = servicos; // Executa o primeiro callback retornando um array de servicos como parâmetro
    // tslint:disable-next-line: max-line-length
    }, () => { this.errorMsgComponent.setError('Falha ao buscar os serviços'); }); // Se a requisição falhou, ele cai no segundo callback de erro, passando a mensagem ao componente de erro.
  }

  excluir(id: number) { // Se der certo, chama callback para recarregar a lista, senão mostra a mensagem no segundo callback
    this.servicoExcluir = id;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete() {
    this.servicoService.excluir(this.servicoExcluir).subscribe(() => {this.buscarTodos(); this.deleteModalRef.hide();
    }, () => {this.errorMsgComponent.setError('Falha ao deletar servico'); });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  existemServicos(): boolean {
    return this.servicos && this.servicos.length > 0;
  }

}
