import { Section } from './Section';

export class BlogPost {
  title: string;
  slug: string;
  author: string;
  createdAt: number;
  content: Section[];
}
