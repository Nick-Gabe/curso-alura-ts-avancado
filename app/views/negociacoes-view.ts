import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        <tr>
      </thead>
      <tbody>
      ${model.lista
        .map((negociacao) => {
          return `
          <tr>
            <td>${this.formatarData(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
          </tr>
        `;
        })
        .join("")}
      </tbody>
    </table>
    `;
  }

  private formatarData(data: Date): string {
    return data.toLocaleDateString("en", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
}
