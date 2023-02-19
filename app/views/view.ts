export abstract class View<T> {
  protected elemento: HTMLElement;
  protected abstract template(model: T): string;

  constructor(
    selector: string,
    private sanitize = false,
    private callback?: (elemento: HTMLElement) => void
  ) {
    this.elemento = document.querySelector(selector);
  }

  update(model: T): void {
    let template = this.template(model);

    if (this.sanitize) {
      template = template.replace(/<script.*>.*<\/script>/g, "");
    }

    this.elemento.innerHTML = template;
    this.callback?.(this.elemento);
  }
}
