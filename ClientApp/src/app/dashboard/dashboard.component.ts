import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  Type,
  ElementRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { BlogpostsService } from '../modules/blog-services/blogposts.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../modules/blog-services/model/BlogPost';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboardPosts$: Observable<BlogPost[]>;

  constructor(private blogService: BlogpostsService) {}

  ngOnInit() {
    this.dashboardPosts$ = this.blogService.getPosts(0, 4);
  }
}
