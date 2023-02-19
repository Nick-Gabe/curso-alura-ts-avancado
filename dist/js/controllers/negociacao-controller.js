import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#tabelaView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!negociacao)
            return;
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizarView();
    }
    criaNegociacao() {
        const date = this.inputData.valueAsDate;
        const quantidade = this.inputQuantidade.valueAsNumber;
        const valor = this.inputValor.valueAsNumber;
        try {
            this.validaFormulario(date, quantidade, valor);
            return new Negociacao(date, quantidade, valor);
        }
        catch (err) {
            if (err instanceof Error) {
                this.mensagemView.update({
                    tipo: "danger",
                    mensagem: err.message,
                });
            }
        }
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    atualizarView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update({
            tipo: "success",
            mensagem: `Negociação adicionada com sucesso`,
        });
    }
    validaFormulario(data, quantidade, valor) {
        if (!this.dataDiaUtil(data))
            throw new Error("A data precisa ser um dia útil");
    }
    dataDiaUtil(data) {
        return data.getDay() < 5;
    }
}
