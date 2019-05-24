import { EventEmitter } from "events";

export default class ScrollService {
  private isScrolling: any;
  private slideSelector: string;
  private isHorizontal: boolean;
  private timeToSnap: number;
  public emitter: EventEmitter;
  constructor( slideSelector: string, horizontal: boolean = false, timeToSnap = 200) {
    this.slideSelector = slideSelector;
    this.isHorizontal = horizontal;
    this.timeToSnap = timeToSnap;
    this.emitter = new EventEmitter();
  }

  public onScroll( target: HTMLElement) {
    clearTimeout(this.isScrolling);
    this.isScrolling = setTimeout(this.scrollEnd(target), this.timeToSnap);
  }
    
  private scrollEnd(target: HTMLElement) {
    return () => {
      const slides = [...target.querySelectorAll(this.slideSelector)].map(el => el as HTMLElement);
      const activeIx = slides.reduce( (foundIx: number, slide: HTMLElement, ix): number => {
        const targetOffset = this.isHorizontal ? target.offsetLeft : target.offsetTop;
        const targetScroll = this.isHorizontal ? target.scrollLeft : target.scrollTop;
        const slideOffset = this.isHorizontal ? 
          (slide.offsetLeft - target.offsetLeft + 1) :
          (slide.offsetTop - target.offsetTop + 1);
        const foundOffset = this.isHorizontal ? 
          (slides[foundIx].offsetLeft - targetOffset) :
          (slides[foundIx].offsetTop - targetOffset);
        return (slideOffset >= targetScroll && slideOffset < foundOffset) ? ix : foundIx
      }, slides.length - 1);
      this.emitter.emit('active', activeIx);
    }
  }
}