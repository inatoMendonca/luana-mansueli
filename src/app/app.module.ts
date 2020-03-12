import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { FormClienteComponent } from './compartilhado/form-cliente/form-cliente.component';
import { FormFornecedorComponent } from './compartilhado/form-fornecedor/form-fornecedor.component';
import { FormProfissionalComponent } from './compartilhado/form-profissional/form-profissional.component';
import { ListaClientesComponent } from './paginas/cliente/lista-clientes/lista-clientes.component';
import { ListaFornecedoresComponent } from './paginas/fornecedor/lista-fornecedores/lista-fornecedores.component';
import { ListaProfissionaisComponent } from './paginas/profissionais/lista-profissionais/lista-profissionais.component';
import { ListaServicosComponent } from './paginas/servicos/lista-servicos/lista-servicos.component';
import { ListaProdutosComponent } from './paginas/produtos/lista-produtos/lista-produtos.component';
import { FormServicoComponent } from './compartilhado/form-servico/form-servico.component';
import { FormProdutoComponent } from './compartilhado/form-produto/form-produto.component';
import { ListaAgendamentoComponent } from './paginas/agendamento/lista-agendamento/lista-agendamento.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { EditarServicoComponent } from './paginas/servicos/editar-servico/editar-servico.component';
import { CriarServicoComponent } from './paginas/servicos/criar-servico/criar-servico.component';
import { CriarProdutoComponent } from './paginas/produtos/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './paginas/produtos/editar-produto/editar-produto.component';
import { EditarProfissionalComponent } from './paginas/profissionais/editar-profissional/editar-profissional.component';
import { CriarProfissionalComponent } from './paginas/profissionais/criar-profissional/criar-profissional.component';
import { CriarClienteComponent } from './paginas/cliente/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { CriarAgendamentoComponent } from './paginas/agendamento/criar-agendamento/criar-agendamento.component';
import { EditarAgendamentoComponent } from './paginas/agendamento/editar-agendamento/editar-agendamento.component';
import { FormAgendamentoComponent } from './compartilhado/form-agendamento/form-agendamento.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CriarFornecedorComponent } from './paginas/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { EditarFornecedorComponent } from './paginas/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { ListaAgendaComponent } from './paginas/agenda/lista-agenda/lista-agenda.component';
import { EditarAgendaComponent } from './paginas/agenda/editar-agenda/editar-agenda.component';
import { CriarAgendaComponent } from './paginas/agenda/criar-agenda/criar-agenda.component';
import { FormAgendaComponent } from './compartilhado/form-agenda/form-agenda.component';
import { LancaAgendamentoComponent } from './paginas/agendamento/lanca-agendamento/lanca-agendamento.component';
import { FormReciboComponent } from './compartilhado/form-recibo/form-recibo.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacaoComponent,
    FormClienteComponent,
    FormFornecedorComponent,
    FormProfissionalComponent,
    ListaClientesComponent,
    ListaFornecedoresComponent,
    ListaProfissionaisComponent,
    ListaServicosComponent,
    ListaProdutosComponent,
    FormServicoComponent,
    FormProdutoComponent,
    ListaAgendamentoComponent,
    ErrorMsgComponent,
    EditarServicoComponent,
    CriarServicoComponent,
    CriarProdutoComponent,
    EditarProdutoComponent,
    EditarProfissionalComponent,
    CriarProfissionalComponent,
    CriarClienteComponent,
    EditarClienteComponent,
    CriarAgendamentoComponent,
    EditarAgendamentoComponent,
    FormAgendamentoComponent,
    CriarFornecedorComponent,
    EditarFornecedorComponent,
    ListaAgendaComponent,
    EditarAgendaComponent,
    CriarAgendaComponent,
    FormAgendaComponent,
    LancaAgendamentoComponent,
    FormReciboComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    CurrencyMaskModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
