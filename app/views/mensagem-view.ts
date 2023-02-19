import { View } from "./view.js";

export class MensagemView extends View<string> {
  constructor(selector: string) {
    super(selector, (elemento) => {
      setTimeout(() => {
        elemento.innerHTML = "";
      }, 3000);
    });
  }

  protected template(model: string): string {
    return `<p class="alert alert-info">${model}</p>`;
  }
}
