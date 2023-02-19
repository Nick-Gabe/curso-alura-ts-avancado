import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
    formatarData(data) {
        return data.toLocaleDateString("en", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    }
}
