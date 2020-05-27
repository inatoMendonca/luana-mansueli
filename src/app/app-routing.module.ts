import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAgendamentoComponent } from './paginas/agendamento/lista-agendamento/lista-agendamento.component';
import { ListaClientesComponent } from './paginas/cliente/lista-clientes/lista-clientes.component';
import { ListaFornecedoresComponent } from './paginas/fornecedor/lista-fornecedores/lista-fornecedores.component';
import { ListaProdutosComponent } from './paginas/produtos/lista-produtos/lista-produtos.component';
import { ListaProfissionaisComponent } from './paginas/profissionais/lista-profissionais/lista-profissionais.component';
import { ListaServicosComponent } from './paginas/servicos/lista-servicos/lista-servicos.component';
import { CriarServicoComponent } from './paginas/servicos/criar-servico/criar-servico.component';
import { EditarServicoComponent } from './paginas/servicos/editar-servico/editar-servico.component';
import { CriarProdutoComponent } from './paginas/produtos/criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './paginas/produtos/editar-produto/editar-produto.component';
import { CriarClienteComponent } from './paginas/cliente/criar-cliente/criar-cliente.component';
import { EditarClienteComponent } from './paginas/cliente/editar-cliente/editar-cliente.component';
import { CriarProfissionalComponent } from './paginas/profissionais/criar-profissional/criar-profissional.component';
import { EditarProfissionalComponent } from './paginas/profissionais/editar-profissional/editar-profissional.component';
import { CriarAgendamentoComponent } from './paginas/agendamento/criar-agendamento/criar-agendamento.component';
import { EditarAgendamentoComponent } from './paginas/agendamento/editar-agendamento/editar-agendamento.component';
import { CriarFornecedorComponent } from './paginas/fornecedor/criar-fornecedor/criar-fornecedor.component';
import { EditarFornecedorComponent } from './paginas/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { LancaAgendamentoComponent } from './paginas/agendamento/lanca-agendamento/lanca-agendamento.component';
import { FormReciboComponent } from './compartilhado/form-recibo/form-recibo.component';
import { RelEntradaComponent } from './paginas/rel-entrada/rel-entrada.component';
import { RelSaidaComponent } from './paginas/rel-saida/rel-saida.component';
import { RelCarteiraComponent } from './paginas/rel-carteira/rel-carteira.component';
import { RelFormaComponent } from './paginas/rel-forma/rel-forma.component';


const routes: Routes = [
  {path: 'home', component: ListaAgendamentoComponent},
  {path: 'home/agendamentos', component: ListaAgendamentoComponent},
  {path: 'cadastro/clientes', component: ListaClientesComponent},
  {path: 'cadastro/fornecedores', component: ListaFornecedoresComponent},
  {path: 'cadastro/produtos', component: ListaProdutosComponent},
  {path: 'cadastro/profissionais', component: ListaProfissionaisComponent},
  {path: 'cadastro/servicos', component: ListaServicosComponent},
  {path: 'cadastro/agendamentos/nome/:name', component: ListaAgendamentoComponent},
  {path: 'cadastro/fornecedores/novofornecedor', component: CriarFornecedorComponent},
  {path: 'cadastro/profissionais/fornecedores/:id', component: EditarFornecedorComponent},
  {path: 'cadastro/profissionais/novoprofissional', component: CriarProfissionalComponent},
  {path: 'cadastro/profissionais/editar/:id', component: EditarProfissionalComponent},
  {path: 'cadastro/servicos/novoservico', component: CriarServicoComponent},
  {path: 'cadastro/servicos/editar/:id', component: EditarServicoComponent},
  {path: 'cadastro/produtos/novoproduto', component: CriarProdutoComponent},
  {path: 'cadastro/produtos/editar/:id', component: EditarProdutoComponent},
  {path: 'cadastro/clientes/novocliente', component: CriarClienteComponent},
  {path: 'cadastro/clientes/editar/:id', component: EditarClienteComponent},
  {path: 'cadastro/agendamentos/novoagendamento', component: CriarAgendamentoComponent},
  {path: 'cadastro/agendamentos/editar/:id', component: EditarAgendamentoComponent},
  {path: 'cadastro/agendamentos/lancar/:id', component: LancaAgendamentoComponent},
  {path: 'cadastro/agendamentos/imprimir/:id/:cliente/:profissional/:valor/:servico/:data/:forma', component: FormReciboComponent},
  {path: 'relatorio/agendamentos/entrada', component: RelEntradaComponent},
  {path: 'relatorio/agendamentos/saida', component: RelSaidaComponent},
  {path: 'relatorio/agendamentos/carteira', component: RelCarteiraComponent},
  {path: 'relatorio/agendamentos/forma', component: RelFormaComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
