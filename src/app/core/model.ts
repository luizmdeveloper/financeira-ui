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
