type sexoCliente = 'masculino' | 'feminino';

export interface Cliente {
    idCliente: number;
    nomeCliente: string;
    mailCliente: string;
    foneCliente: number;
    cpfCliente: number;
    enderecoCliente: string;
    sexoCliente: sexoCliente;
    dataNascimento: Date;
}
