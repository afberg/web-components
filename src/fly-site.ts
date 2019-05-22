import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('fly-site')
export default class FlySite extends LitElement {

  static get styles() {
    return css`
      :host {
        background-color: var(--someColor, orange);
        display: block;
        padding: 25px;
      }
    `;
  }
  
  @property()
  heading: String = 'Book a Holiday';

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
