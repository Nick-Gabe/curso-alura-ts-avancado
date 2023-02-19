export abstract class View<T> {
  protected elemento: HTMLElement;
  abstract template(model: T): string;

  constructor(
    selector: string,
    private callback?: (elemento: HTMLElement) => void
  ) {
    this.elemento = document.querySelector(selector);
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
    this.callback?.(this.elemento);
  }
}
