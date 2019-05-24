
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';

import ScrollSnapService from '@services/ScrollSnapService';
@customElement('trip-configurator')
export default class TripConfigurator extends LitElement {
  @property( { type: Number } ) activeIx = 0;
  scrollSnapService: ScrollSnapService;
  timeOptions: String[];
  peopleOptions: String[];
  constructor() {
    super();
    
    this.scrollSnapService = new ScrollSnapService('.slide', false, 100);
    this.scrollSnapService.emitter.on('active', (ix: number) => this.activeIx = ix);
    this.timeOptions =  Array(7).fill(1).map( (val, ix) => (val*(ix + 1)).toString());
    this.peopleOptions =  Array(5).fill(1).map( (val, ix) => (val*(ix + 1)).toString());
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
        position: relative;
      }
      carousel-indicator {
        position: fixed;
        z-index: 5;
        margin: var(--marginSize, 30px)
      }
      slider-picker {
        position: relative;
        display: block;
        height: 100%;
        scroll-snap-align: start;
      }
      .price {
        --background: radial-gradient(circle at bottom left, #432f79 0, #3cc2f6 100%);
      }
      .weeks {
        --background: radial-gradient(circle at bottom left, #dd57f3 0, #7d43ff 100%);
      }
      .people {
        --background: radial-gradient(circle at bottom left, #f0795a 0, #db3a89 100%);
      }

      .airports {
        --background: radial-gradient(circle at bottom left, #f0ad5a 0, #7cea39 100%);
      }
       
    `;
  }
  
  render() {
    return html`
      <div class="overflow-container" 
        @scroll="${this.onScroll}">
        <carousel-indicator .count="${4}" .activeIx="${this.activeIx}"></carousel-indicator>
        <slider-picker 
          class="slide price"
          .isActive="${this.activeIx === 0}">
          <snap-slider 
              prefix="$"
              slot="slider"></snap-slider>
        </slider-picker>
        <slider-picker
          class="slide weeks" 
          .preText="${['how long', 'do you want', 'to travel?']}"
          afterText="weeks"
          .isActive="${this.activeIx === 1 }">
          <snap-slider 
            .slideTexts="${this.timeOptions}"
            slot="slider">
          </snap-slider>
        </slider-picker>
        <slider-picker
          class="slide people" 
          .preText="${['how many', 'are you?']}"
          afterText="people"
          .isActive="${this.activeIx === 2 }">
          <snap-slider 
            .slideTexts="${this.peopleOptions}"
            slot="slider">
          </snap-slider>
          
        </slider-picker>

        <slider-picker
          class="slide airports" 
          .preText="${['Where', 'do you want', 'to fly from?']}"
          afterText="airports"
          .isActive="${this.activeIx === 3 }">
          <snap-slider 
            .slideTexts="${['new york', 'Amsterdam', 'Oslo', 'Stockholm']}"
            slot="slider">
          </snap-slider>
          
        </slider-picker>
      </div>
    `;
  }
  onScroll({ currentTarget }: Event) {
    this.scrollSnapService.onScroll(currentTarget as HTMLElement);
  }
}
