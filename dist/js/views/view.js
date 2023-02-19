export class View {
    constructor(selector, callback) {
        this.callback = callback;
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        var _a;
        const template = this.template(model);
        this.elemento.innerHTML = template;
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, this.elemento);
    }
}
