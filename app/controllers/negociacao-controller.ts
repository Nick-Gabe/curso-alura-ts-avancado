import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { BootstrapAlerts, DiasDaSemana } from "../types/enums/index.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#tabelaView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");

    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if (!negociacao) return;

    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizarView();
  }

  private criaNegociacao(): Negociacao {
    const date = this.inputData.valueAsDate;
    const quantidade = this.inputQuantidade.valueAsNumber;
    const valor = this.inputValor.valueAsNumber;

    try {
      this.validaFormulario(date, quantidade, valor);
      return new Negociacao(date, quantidade, valor);
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.mensagemView.update({
          tipo: BootstrapAlerts.danger,
          mensagem: err.message,
        });
      }
    }
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizarView() {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update({
      tipo: BootstrapAlerts.success,
      mensagem: `Negociação adicionada com sucesso`,
    });
  }

  private validaFormulario(
    data: Date,
    quantidade: number,
    valor: number
  ): void {
    if (!this.dataDiaUtil(data))
      throw new Error("A data precisa ser um dia útil");
  }

  private dataDiaUtil(data: Date): boolean {
    const day = data.getDay();
    return day > DiasDaSemana.DOMINGO && day < DiasDaSemana.SABADO;
  }
}
