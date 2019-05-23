
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('price-item')
export default class PriceItem extends LitElement {

  static get styles() {
    return css`
      span {
        font-weight: thin;
        color: var(--textColor, white);
        opacity: 0.7;
        font-family: var(--fontFamily, Helvetica, Arial, sans-serif);
        font-size: var(--font-size, 86px);
      }
      .active{
        font-weight: bold;
        opacity: 1;
      }
    `;
  }
  
  @property({ type: Number }) price = 200;
  @property({ type: {
    name: String,
    symbol: String,
    symbolBefore: Boolean
  } }) currency = {
    name: "US DOLLARS",
    symbol: "$",
    symbolBefore: true
  };
  @property({ type: Boolean }) active = false;
  constructor() {
    super();
  }

  render() {
    const text = `${this.currency.symbolBefore ? `${this.currency.symbol}${this.price}` : `${this.price}${this.currency.symbol}`}`
    return html`
      <span class="${this.active ? 'active' : ''}">
        ${text}
      </span>
    `;
  }
}
