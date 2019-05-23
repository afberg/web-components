
import {
  LitElement, html, customElement, property, css,
} from 'lit-element';

@customElement('price-slider')
export default class PriceSlider extends LitElement {
  @property( { type: Array } ) prices = Array(5).fill(200).map( (val, ix) => val*(ix + 1));
  @property( { type: Function }) isScrolling: any;
  @property( { type: Number, attribute: false }) activeIx = 0;
  constructor() {
    super();
  }
  static get styles() {
    return css`
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
      price-item:last-child{
        width: 100%;
      }
      price-item {
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
          this.prices.map( (price, ix) => html`
            <price-item .price="${price}" .active="${ix === this.activeIx}"></price-item>
          `)
        }
      </div>
    </div>
      
    `;
  }

  onScroll( { currentTarget }: TouchEvent) {
    const target= currentTarget as HTMLElement;
    clearTimeout(this.isScrolling);
    this.isScrolling = setTimeout(this.scrollEnd(target), 200);
    
  }
  
  scrollEnd(target: HTMLElement) {
    return () => {
      const slides = [...target.querySelectorAll('price-item')].map(el => el as HTMLElement)
      const activeIx = slides.reduce( (foundIx: number, slide: HTMLElement, ix): number => {
        const offset = slide.offsetLeft - target.offsetLeft;
        return (offset >= target.scrollLeft && offset < slides[foundIx].offsetLeft - target.offsetLeft) ? ix : foundIx
      }, slides.length - 1);
      this.activeIx = activeIx;
    }
  }


}
