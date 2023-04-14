import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { PassportLocalStrategy } from "./password.local.strategy";


@Module({
    imports: [UserModule],
    controllers: [],
    providers: [PassportLocalStrategy],
})

export class AuthModule {}