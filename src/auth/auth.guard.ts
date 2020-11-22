import { AuthGuard } from '@nestjs/passport';
import { User } from './auth.strategy';

export const JwtAuthGuard = (options: { allowNoAuth?: boolean } = {}) => class extends AuthGuard('jwt') {

    handleRequest<TUser extends User>(err: any, user: TUser, info: Error, context, status): TUser {
        if (options.allowNoAuth && info?.message === 'No auth token') {
            return undefined;
        }
        return super.handleRequest(err, user, info, context, status);
    }

}
