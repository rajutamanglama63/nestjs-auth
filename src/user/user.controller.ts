import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Controller("authentication")
export class UserController {
    constructor () {}

    @Get()
    @UseGuards(AuthGuard("local"))
    getUserData(): string {
        return "This is private data."
    }
}