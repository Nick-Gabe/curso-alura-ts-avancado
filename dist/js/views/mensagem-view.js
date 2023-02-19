import { View } from "./view.js";
export class MensagemView extends View {
    constructor(selector) {
        super(selector, (elemento) => {
            setTimeout(() => {
                elemento.innerHTML = "";
            }, 3000);
        });
    }
    template(model) {
        return `
      <p class="alert ${model.tipo || "alert-primary"}">
        ${model.mensagem}
      </p>
    `;
    }
}
