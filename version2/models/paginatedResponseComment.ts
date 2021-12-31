import { Comment } from './comment.ts';

export interface PaginatedResponseComment {
  total?: number;
  results?: Comment[];
  maxResults?: number;
  startAt?: number;
}
