
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';

import ScrollSnapService from '@services/ScrollSnapService';

@customElement('snap-slider')
export default class SnapSlider extends LitElement {
  @property( { type: Array } ) slideTexts = Array(5).fill(200).map( (val, ix) => (val*(ix + 1)).toString());
  @property( { type: String }) prefix = "";
  @property( { type: Function, attribute: false }) isScrolling: any;
  @property( { type: Number, attribute: false }) activeIx = 0;
  
  scrollSnapService: ScrollSnapService;
  constructor() {
    super();
    this.scrollSnapService = new ScrollSnapService('slide-item', true);
    this.scrollSnapService.emitter.on('active', (ix: number) => this.activeIx = ix);
  }
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      .slider {
        display: flex;
        width: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        position: absolute;
        top: 0;
        left: 0;
      }
      slide-item:last-child{
        width: 100%;
      }
      slide-item {
        max-width: 100%;
        display:block;
        width: auto;
        scroll-snap-align: start;
        flex-shrink: 0;
        border-radius: 10px;
        position: relative;
        padding-left: var(--paddingSize, 40px);
      }
      .container {
        width: 100%;
        height: 116px;
        font-size: var(--fontSize, 86px);
        font-family: var(--fontFamily, Helvetica, Arial, sans-serif);
        color: var(--fontColor, white);
        position: relative;
      }
    `;
  }

  render() {
    return html`
    <div class="container">
      <div class="slider" @scroll=${this.onScroll}>
        ${
          this.slideTexts.map( (slideTexts, ix) => html`
            <slide-item .text="${slideTexts}" .active="${ix === this.activeIx}" .prefix="${this.prefix}"></slide-item>
          `)
        }
      </div>
    </div>
      
    `;
  }
  onScroll( { currentTarget }: Event) {
    this.scrollSnapService.onScroll(currentTarget as HTMLElement);
  }

}
