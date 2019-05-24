
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('price-picker')
export default class PricePicker extends LitElement {
  @property( { type: String } ) heading = 'I am the PricePicker component.';

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .container {
        box-sizing: border-box;
        --paddingSize: 30px;
        --background: radial-gradient(circle at bottom left, #432f79 0, #3cc2f6 100%);
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        padding: var(--paddingSize);
        justify-content: space-around;
        background: var(--background, orange);
      }
      .spend-text {
        font-size: var(--fontSize, 32px);
        font-family: var(--fontFamily, Helvetica, Arial, sans-serif);
        color: var(--fontColor, white);
        text-transform: uppercase;
        line-height: 150%;
      }
      price-slider {
        margin-top: 20px;
        margin-left: calc(-1 * var(--paddingSize));
        width: calc(100% + var(--paddingSize) * 2);
        display: block;
      }
      .currency {
        opacity: 0.8;
        text-transform: uppercase;
        font-size: 24px;
        font-family: var(--fontFamily, Helvetica, Arial, sans-serif);
        color: white;
        margin-left: 10px;
      }
    `;
  }
  
  render() {
    return html`
      <div class="container">
        <div></div>
        <div class="price-picker">
          <div class="spend-text">
            how much<br> do you want<br> to spend?
          </div>
          <price-slider></price-slider>
          <div class="currency">us dollar</div>
        </div>
      </div>
    `;
  }
}
