import { Comment } from './comment';

export interface Post {
    id: number;
    title: string;
    content: string;
    createdBy?: string;
    createdAt: string;
    comments: Comment[];
}
