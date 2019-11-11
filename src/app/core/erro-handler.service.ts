import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErroHandlerService {

  constructor() { }

  handle(erroResposta: any): string {
    let mensagem = '';

    if (typeof erroResposta === 'string'){
      mensagem = erroResposta
    } else if (erroResposta instanceof HttpErrorResponse
              && erroResposta.status >= 400 && erroResposta.status <= 499){
        mensagem = 'Ocorreu um erro ao processar a sua solicitação';

        if (erroResposta.status === 403) {
          mensagem = 'Usuário não tem autorização para fazer tal operação';
        }

        try {
          mensagem = erroResposta.error[0].mensagemUsuario;
        } catch (e) { }

        console.error('Ocorreu um erro', erroResposta);
    } else {
      mensagem = 'Erro ao processar serviço remoto. Tente novamente.';
    }

    return mensagem;
  }
}
