import { UserRepository } from '@/core/domain/repositories/UserRepository'

export class UserUseCase {
    private repo: UserRepository

    constructor(repo: UserRepository) {
        this.repo = repo
    }

    public async GetUser() {
        return this.repo.GetUser()
    }
}
