export class Alert {
  mostrar = false;
  type = '';
  mensagem = '';
}

export class Categoria {
  codigo: number;
  nome: string;
}

export class Conta {
  codigo: number;
  nome: string;
  banco: boolean = false;
}

export class Transacao {
  codigo: number;
  categoria: Categoria = new Categoria();
  conta: Conta = new Conta();
  tipo: String;
  observacao: string;
  data: Date = new Date();
  valor: number;
}

export class Totais {
  carteira: number = 0;
  banco: number = 0;
  quantidadeTransacoes: number = 0;
}

export class TransacaoCategoria {
  categoria: string;
  percentual: number;
}
