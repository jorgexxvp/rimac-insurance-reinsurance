import { IUser } from '../models/User'

export interface UserRepository {
    GetUser: () => Promise<IUser>
}
