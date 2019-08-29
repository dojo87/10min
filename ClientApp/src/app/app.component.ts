import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Inject,
  OnInit,
  Optional
} from '@angular/core';
import { WINDOW } from './services/window/window.service';
import { Router, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  menuExpanded = false;
  menuSticky = false;
  menuInitialPosition = 0;

  @ViewChild('stickyMenu', { static: false }) menuElement: ElementRef;

  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    @Optional() private titleService: Title
  ) {}

  ngAfterViewInit(): void {
    this.menuInitialPosition = this.menuElement.nativeElement.clientHeight;
  }

  ngOnInit(): void {}

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
