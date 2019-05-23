
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';

@customElement('price-slider')
export default class PriceSlider extends LitElement {
  @property( { type: Array } ) prices = Array(5).fill(200).map( (val, ix) => val*(ix + 1));

  constructor() {
    super();
  }
  static get styles() {
    return css`
      .slider {
        display: flex;
        width: 100%;
        overflow: hidden;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      price-item:not(:last-child) {
        margin-right: 20px;
      }
      price-item {
        scroll-snap-align: start;
        flex-shrink: 0;
        width: auto;
        margin-right: 50px;
        border-radius: 10px;
        transform-origin: center center;
        transform: scale(1);
        transition: transform 0.5s;
        position: relative;
      }
    `;
  }

  render() {
    return html`
    <div class="slider">
      ${
        this.prices.map(price => html`
          <price-item .price="${price}"></price-item>
        `)
      }
    </div>
      
    `;
  }
}
