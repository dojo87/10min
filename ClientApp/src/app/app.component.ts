import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Inject
} from '@angular/core';
import { WINDOW } from './services/window/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  menuExpanded = false;
  menuSticky = false;
  menuInitialPosition = 0;

  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;

  constructor(@Inject(WINDOW) private window: Window) {}

  ngAfterViewInit(): void {
    this.menuInitialPosition = this.menuElement.nativeElement.clientHeight;
  }

  @HostListener('window:scroll', ['$event'])
  onPageScrollHandleMenu() {
    const windowScroll = this.window.pageYOffset;

    if (windowScroll >= this.menuInitialPosition) {
      this.menuSticky = true;
    } else {
      this.menuSticky = false;
    }
  }
}
