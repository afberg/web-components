
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('test-component')
export default class TestComponent extends LitElement {

  static get styles() {
    return css`
      :host {
        background-color: var(--someColor, orange);
      }
    `;
  }
  
  @property()
  heading: String = 'I am the TestComponent component.';

  constructor() {
    super();
  }

  render() {
    return html`
      <h2>${this.heading}</h2>
      <div>
        <slot></slot>
      </div>
    `;
  }
}
