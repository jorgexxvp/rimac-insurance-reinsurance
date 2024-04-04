import { IPlanResponse } from '../models/Plan'

export interface PlanRepository {
    GetPlans: () => Promise<IPlanResponse>
}
