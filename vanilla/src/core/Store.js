import Observe from '@/core/Observe';
import { _render } from '@/core/Render';

export default class Store {
  #state;
  #reducers;

  constructor({ initialState = {}, reducers = {} }) {
    this.#state = new Observe(initialState, _render);
    this.#reducers = reducers;
  }

  get state() {
    return { ...this.#state };
  }
  
  dispatch({ type, payload }) {
    this.#reducers[type](this.#state, payload);
  }
}