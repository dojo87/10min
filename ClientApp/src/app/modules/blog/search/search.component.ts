import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostsService } from '../../blog-services/blogposts.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-services/model/BlogPost';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchTerm = '';
  public posts$: Observable<BlogPost[]>;
  constructor(
    private route: ActivatedRoute,
    private service: BlogpostsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params.term;
      if (this.searchTerm) {
        this.posts$ = this.service.findPosts(this.searchTerm, 0, 10);
      } else {
        this.posts$ = this.service.getPosts(0, 10);
      }
    });
  }
}
