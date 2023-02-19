import { View } from "./view.js";

type BootstrapAlerts =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

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
      <p class="alert alert-${model.tipo || "primary"}">
        ${model.mensagem}
      </p>
    `;
  }
}
