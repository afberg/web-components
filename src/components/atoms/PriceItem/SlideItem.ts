
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';


@customElement('slide-item')
export default class SlideItem extends LitElement {
  @property({ type: String }) text = '1';
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: String }) prefix = "";
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
      .prefix {
        opacity: 0;
        margin-right: 10px;
      }
      .prefix.active{
        opacity: 1;
        font-weight: normal;
      }

    `;
  }
  
  
  constructor() {
    super();
  }

  render() {
    return html`
      
      <span class="prefix ${this.active ? 'active' : ''}">${this.prefix}
      </span><span class="${this.active ? 'active' : ''}">
        ${this.text}
      </span>
    `;
  }
}
