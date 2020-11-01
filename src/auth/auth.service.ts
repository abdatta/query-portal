import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) {}

    async login(username: string, password: string) {
        const isValid = await this.isValidCredentials(username, password);
        if (!isValid) { return null; }

        const payload = { sub: username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    private async isValidCredentials(username: string, password: string): Promise<boolean> {
        // TODO: Implement login logic
        return password === 'tempass';
    }
}
