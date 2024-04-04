import { API_URL } from '@/presentation/toolbox/constants/environment'

import { PlanUseCase } from './application/PlanUseCase'
import { UserUseCase } from './application/UserUseCase'
import { PlanApi } from './infraestructure/services/PlanApi'
import { UserApi } from './infraestructure/services/UserApi'

// Repositories
const userApi = new UserApi({ baseURL: API_URL })
const plansApi = new PlanApi({ baseURL: API_URL })

// Client
export const clientUserApi = new UserUseCase(userApi)
export const clientPlanApi = new PlanUseCase(plansApi)
