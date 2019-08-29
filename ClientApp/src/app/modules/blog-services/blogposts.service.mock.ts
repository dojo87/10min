import { BlogPost } from './model/BlogPost';
import { Observable, of as observableOf } from 'rxjs';
import { IBlogpostsService } from './blogposts.service';

export class BlogpostsServiceMock implements IBlogpostsService {
  private POSTS: BlogPost[] = [
    {
      title: 'Angular Crash Course',
      slug: 'Angular-crash-course',
      author: '10min.pl',
      createdAt: Date.now(),
      content: [
        {
          type: 'markdown',
          content: 'Some markdown content'
        }
      ]
    },
    {
      title: 'Normal Course',
      slug: 'normal-course',
      author: '10min.pl',
      createdAt: Date.now(),
      content: [
        {
          type: 'markdown',
          content:
            'You can find a **keyword** here.\r\n' +
            ' And here is some code:\r\n' +
            '```javascript\r\n' +
            'var j = new J();\r\n' +
            '```\r\n'
        },
        {
          type: 'markdown',
          content: 'and a specialword here.'
        }
      ]
    }
  ];

  getPosts(page: number, perPage: number): Observable<BlogPost[]> {
    return observableOf(
      this.POSTS.slice(page * perPage, page * perPage + perPage)
    );
  }

  findPosts(
    findCriteria: string,
    page: number,
    perPage: number
  ): Observable<BlogPost[]> {
    return observableOf(
      this.POSTS.filter(
        p => p.content.findIndex(s => s.content.indexOf(findCriteria) >= 0) >= 0
      ).slice(page * perPage - 1, page * perPage + perPage)
    );
  }
  public getPost(slug: string): Observable<BlogPost> {
    return observableOf(
      this.POSTS.find(
        p => p.slug.toLocaleLowerCase() === slug.toLocaleLowerCase()
      )
    );
  }
}
