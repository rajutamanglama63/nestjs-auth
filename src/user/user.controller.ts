import { Get } from "@nestjs/common";


export class UserController {
    constructor () {}

    @Get()
    getUserData(): string {
        return "This is private data."
    }
}