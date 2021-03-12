import { User } from "src/app/users/interfaces/users.interface";

export interface Album {
    userId: number;
    id:     number;
    title:  string;
    user: User;
}