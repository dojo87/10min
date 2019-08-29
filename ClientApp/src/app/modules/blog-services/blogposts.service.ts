import { Injectable } from '@angular/core';
import { BlogPost } from './model/BlogPost';
import { Observable, of as observableOf } from 'rxjs';

export interface IBlogpostsService {
  getPost(slug: string): Observable<BlogPost>;
  getPosts(page: number, perPage: number): Observable<BlogPost[]>;
  findPosts(
    findCriteria: string,
    page: number,
    perPage: number
  ): Observable<BlogPost[]>;
}

@Injectable({
  providedIn: 'root'
})
export class BlogpostsService implements IBlogpostsService {
  constructor() {}

  getPosts(page: number, perPage: number): Observable<BlogPost[]> {
    throw new Error('Method not implemented.');
  }
  findPosts(
    findCriteria: string,
    page: number,
    perPage: number
  ): Observable<BlogPost[]> {
    throw new Error('Method not implemented.');
  }

  public getPost(slug: string): Observable<BlogPost> {
    return observableOf(null);
  }
}
