import { UserRepository } from '@/core/domain/repositories/UserRepository'
import { IUser } from '@/presentation/toolbox/interface/User'

import { PublicApi } from '../api/Api'

export class UserApi extends PublicApi implements UserRepository {
    public GetUser = async () => {
        const data = await this.get<IUser>('/api/user.json')
        return data.data
    }
}
