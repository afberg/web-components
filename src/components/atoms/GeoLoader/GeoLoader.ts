
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('geo-loader')
export default class GeoLoader extends LitElement {
  @property( { type: String } ) heading = 'I am the GeoLoader component.';

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--someColor, orange);
      }
    `;
  }
  
  render() {
    return html`
      <h2>${this.heading}</h2>
    `;
  }
}
