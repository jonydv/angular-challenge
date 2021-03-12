import { User } from "src/app/users/interfaces/users.interface";

export interface Post {
    userId:   number;
    id:       number;
    title:    string;
    body:     string;
    comments: Comment[];
    user:     User;
}

export interface Comment {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}