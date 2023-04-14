import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: "Dhaka Kumar",
            email: "dhaka@gmail.com",
            password: "1234"
        },
        {
            username: "Blonde",
            email: "blonde@gmail.com",
            password: "1234"
        }
    ]

    findUserByName(username: string): User {
        const user = this.users.find((user: User) => user.username === username)

        return user
    }
}