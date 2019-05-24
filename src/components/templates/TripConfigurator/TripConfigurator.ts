
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';

import ScrollSnapService from '@services/ScrollSnapService';
@customElement('trip-configurator')
export default class TripConfigurator extends LitElement {
  @property( { type: Number } ) activeIx = 0;
  scrollSnapService: ScrollSnapService;
  constructor() {
    super();
    
    this.scrollSnapService = new ScrollSnapService('.slide');
    this.scrollSnapService.emitter.on('active', (ix: number) => this.activeIx = ix);
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }
      .overflow-container{
        height: 100%;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
      }
      carousel-indicator {
        position: fixed;
        margin: var(--marginSize, 30px)
      }
      price-picker {
        display: block;
        height: 100%;
        scroll-snap-align: start;
      }

    `;
  }
  
  render() {
    return html`
      <div class="overflow-container" @scroll="${this.onScroll}">
        <carousel-indicator .count="${4}" .activeIx="${this.activeIx}"></carousel-indicator>
        <price-picker class="slide"></price-picker>
        <price-picker class="slide"></price-picker>
      </div>
    `;
  }
  onScroll({ currentTarget }: Event) {
    this.scrollSnapService.onScroll(currentTarget as HTMLElement);
  }
}
