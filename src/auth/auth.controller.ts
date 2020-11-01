import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './auth.strategy';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body('username') username: string,
                @Body('password') password: string) {
        const jwtToken = await this.authService.login(username, password);
        if (!jwtToken) {
            throw new UnauthorizedException();
        }
        return jwtToken;
    }

    @Get('user')
    @UseGuards(AuthGuard('jwt'))
    getProfile(@Request() req: { user: User }) {
        return req.user;
    }
}
