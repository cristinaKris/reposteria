import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements AfterViewInit {

  @Input() interval = 3000;
  @Input() pauseOnHover = true;
  @Input() showArrows = true;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  private timer: any;
  private hover = false;

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.stopAutoScroll();
    this.timer = setInterval(() => {
      if (!this.pauseOnHover || !this.hover) {
        this.scrollRight();
      }
    }, this.interval);
  }

  stopAutoScroll() {
    if (this.timer) clearInterval(this.timer);
  }

  scrollRight() {
    const el = this.scrollContainer.nativeElement;
    el.scrollLeft += 250;
  }

  scrollLeft() {
    const el = this.scrollContainer.nativeElement;
    el.scrollLeft -= 250;
  }

  onMouseEnter() { this.hover = true; }
  onMouseLeave() { this.hover = false; }
}
