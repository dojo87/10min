import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../blog-services/model';
import { BlogpostsService } from '../../blog-services/blogposts.service';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private slug: string;
  public post: BlogPost;
  constructor(
    private route: ActivatedRoute,
    private service: BlogpostsService,
    @Optional() private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params.slug;
      this.service.getPost(this.slug).subscribe(bp => {
        this.post = bp;
        if (this.titleService) {
          this.titleService.setTitle('10 min blog - ' + this.post.title);
        }
      });
    });
  }
}
