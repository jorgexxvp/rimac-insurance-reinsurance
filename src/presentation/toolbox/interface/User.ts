import { EDocumentUser } from '../enum/user'

export interface IInfoUser {
    type: EDocumentUser
    value: string
    phone: number
}

export interface IUser {
    name: string
    lastName: string
    birthDay: string
    info: IInfoUser
}
