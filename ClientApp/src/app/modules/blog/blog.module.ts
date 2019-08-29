import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './post/post.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [SearchComponent, PostComponent],
  imports: [CommonModule, BlogRoutingModule, MarkdownModule.forRoot()]
})
export class BlogModule {}
