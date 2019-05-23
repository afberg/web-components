
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('price-item')
export default class PriceItem extends LitElement {

  static get styles() {
    return css`
      span {
        font-weight: thin;
        color: var(--fontColor, white);
        opacity: 0.7;
        font-family: var(--fontFamily, Helvetica, Arial, sans-serif);
        font-size: var(--fontSize, 86px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        filter: drop-shadow(0 4px 10px rgba(0,0,0,0.2));
        transform: scale(0.9);
        display: inline-block;
        vertical-align: center;
        margin-right: 0;
      }
      .active {
        font-weight: bold;
        opacity: 1;
        transform: scale(1);
      }
      .symbol {
        opacity: 0;
        margin-right: 10px;
      }
      .symbol.active{
        opacity: 1;
        font-weight: normal;
      }

    `;
  }
  
  @property({ type: Number }) price = 200;
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: String }) symbol = "$";
  constructor() {
    super();
  }

  render() {
    return html`
      
      <span class="symbol ${this.active ? 'active' : ''}">${this.symbol}
      </span><span class="${this.active ? 'active' : ''}">
        ${this.price}
      </span>
    `;
  }
}
