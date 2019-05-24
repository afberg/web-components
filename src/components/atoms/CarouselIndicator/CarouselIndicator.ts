
import {
  LitElement, html, customElement, property, css
} from 'lit-element';


@customElement('carousel-indicator')
export default class CarouselIndicator extends LitElement {

  constructor() {
    super();
  }

  @property( { type: Number } ) count = 4;  
  @property( { type: Number } ) activeIx = 1;

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: var(--flexDirection, column);
        background-color: var(--backgroundColor, transparent);
      }
      div {
        width: var(--indicatorSize, 7px);
        height: var(--indicatorSize, 7px);
        margin: 5px;
        border-radius: 50%;
        background-color: var(--indicatorColor, white);
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
        opacity: 0.7;
        position: relative;
      }
      div::after {
        display: block;
        content: ' ';
        fill: blue;
        background-color: var(--indicatorColor, white);
        opacity: 0.5;
        border-radius: 50%;
        position: absolute;
        width: calc(100% * 5);
        height: calc(100% * 5);
        top: -200%;
        left: -200%;
        transition: none;
        transform: scale(0.2);
      }
      .active{
        opacity: 1;
        transform: scale(2);
      }
      div.active::after {
        transform: scale(5);
        opacity: 0;
        transition: all 0.5s ease-out;
      }
    `;
  }

  render() {
    const items: Boolean[] = Array(this.count).fill(1);
    return html`
      ${items.map( (_, ix) => html`
        <div class="${this.activeIx % this.count ===  ix? 'active': ''}"
          @click="${() => this.activeIx += 1}"
        ></div>
      `)}
    `;
  }
}
