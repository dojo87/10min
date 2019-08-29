import { Injectable, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageServiceService {
  private baseTitle: '10 min - blog IT';
  constructor(@Optional() private titleService: Title, private router: Router) {
    if (this.titleService) {
      this.router.events.subscribe(e => {
        if (e instanceof NavigationStart) {
          this.titleService.setTitle(this.baseTitle);
        }
      });
    }
  }

  public setTitle(title: string) {
    if (this.titleService) {
      this.titleService.setTitle(this.baseTitle + ' - ' + title);
    }
  }
}
