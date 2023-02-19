export class View {
    constructor(selector, sanitize = false, callback) {
        this.sanitize = sanitize;
        this.callback = callback;
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        var _a;
        let template = this.template(model);
        if (this.sanitize) {
            template = template.replace(/<script.*>.*<\/script>/g, "");
        }
        this.elemento.innerHTML = template;
        (_a = this.callback) === null || _a === void 0 ? void 0 : _a.call(this, this.elemento);
    }
}
