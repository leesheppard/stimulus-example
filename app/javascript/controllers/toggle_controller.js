import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
    toggle(e) {
        e.stopPropagation();
        this.element.classList.toggle(this.cssClass);
    }

    get cssClass() {
        return this.data.get("cssClass");
    }
}
