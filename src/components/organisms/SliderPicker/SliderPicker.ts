
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('slider-picker')
export default class SliderPicker extends LitElement {
  @property( { type: Array } ) options: String[] = Array(5).fill(200).map( (val, ix) => (val*(ix + 1)).toString());
  @property( { type: String } ) prefix = "$"
  @property( { type: Array } ) preText = ["how much", "do you want", "to spend?"];
  @property( { type: String } ) afterText = "us dollar";
  @property( { type: Boolean } ) isActive = false;
  constructor() {
    super();
  }

  static get styles() {
    return css`
      .container {
        box-sizing: border-box;
        --paddingSize: 30px;
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
        padding: var(--paddingSize);
        justify-content: space-around;
        z-index: 1;
        position: relative;
      }
      .spend-text {
        font-size: var(--fontSize, 32px);
        font-family: var(--fontFamily, Helvetica, Arial, sans-serif);
        color: var(--fontColor, white);
        text-transform: uppercase;
        line-height: 150%;
      }
      snap-slider {
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
      .background {
        position: fixed;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background, orange);
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
      .background.active {
        opacity: 1;
      }
      .slider-picker {
        z-index: 1;
        position: relative;
      }
    `;
  }
  
  render() {
    return html`
      <div class="background ${this.isActive ? 'active': ''}"></div>
      <div class="container">
        <div></div>
        <div class="slider-picker">
          <div class="spend-text">
            ${this.preText.map( (text, ix) => html`${text}${ix < this.preText.length - 1 ? html`<br>`: ''}`)}
          </div>
          <snap-slider .slideTexts="${this.options}" .prefix="${this.prefix}"></snap-slider>
          <div class="currency">${this.afterText}</div>
        </div>
      </div>
    `;
  }
}
