
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
  @property( { type: Number, attribute: false, noAccessor: true } ) previousIx = 1;

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
      }
      .active{
        animation: scaleIn 0.2s ease-in-out 0s 1;
        transform: scale(2);
      }
      .active-out:not(.active) {
        animation: scaleOut 0.2s ease-in-out 0s 1;
        transform: scale(1);
      }
      @keyframes scaleIn {
        0%   { transform: scale(1) }
        100% { transform: scale(2) }
      }
      @keyframes scaleOut {
        0%   { transform: scale(2) }
        100% { transform: scale(1) }
      }
    `;
  }

  render() {
    const items: Boolean[] = Array(this.count).fill(1);
    return html`
      ${items.map( (_, ix) => html`
        <div class="
            ${this.activeIx % this.count ===  ix? 'active': ''} 
            ${this.previousIx % this.count === ix ? 'active-out' : ''}"
          @click="${() => this.activeIx += 1}"
        ></div>
      `)}
    `;
  }
  updated(){
    this.previousIx = this.activeIx;
  }
}
