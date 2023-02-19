export class NegociacoesView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(negociacoes) {
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
      ${negociacoes
            .map((negociacao) => {
            return `
          <tr>
            <td>${negociacao.data.toLocaleDateString("en", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })}</td>
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
    update(negociacoes) {
        const template = this.template(negociacoes.lista);
        this.elemento.innerHTML = template;
    }
}
