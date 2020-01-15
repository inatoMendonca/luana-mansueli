type sexoProfissional = 'masculino' | 'feminino';
type funcaoProfissional = 'maquiagem' | 'cabeleireiro(a)' | 'depilação' | 'administrativo' | 'vendedor(a)';

export interface Profissional {
    idProfissional: number;
    nomeProfissional: number;
    cpfProfissional: number;
    foneProfissional: number;
    mailProfissional: string;
    funcaoProfissional: funcaoProfissional;
    sexoProfissional: sexoProfissional;
}
