type servico = 'Maquiagem' | 'Escova Progressiva' | 'Corte' | 'Coloração' | 'Hidratação' | 'Selante' | 'Penteado' | 'Botox' | 'Matização';
type profissional = 'Luana Mansueli' | 'Marli' | 'Pâmela' | 'Ana Flávia';

export interface Agendamento {
    idAgendamento: number;
    nomeCliente: string;
    nomeProfissional: profissional;
    nomeServico: servico;
    diaAgendamento: Date;
    inicioAgendamento: string;
    fimAgendamento: string;
    obsAgendamento: string;
}
