import {createElement} from '../render.js';

const CreateListTemplate = () => '<ul class="trip-events__list"></ul>';

export default class List {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return CreateListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
