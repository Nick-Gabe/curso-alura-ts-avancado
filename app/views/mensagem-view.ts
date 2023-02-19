import { View } from "./view.js";
import { BootstrapAlerts } from "../types/enums/index.js";

type MensagemInput = {
  tipo?: BootstrapAlerts;
  mensagem: string;
};

export class MensagemView extends View<MensagemInput> {
  constructor(selector: string) {
    super(selector, (elemento) => {
      setTimeout(() => {
        elemento.innerHTML = "";
      }, 3000);
    });
  }

  protected template(model: MensagemInput): string {
    return `
      <p class="alert ${model.tipo || "alert-primary"}">
        ${model.mensagem}
      </p>
    `;
  }
}
