import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router'

import { ROUTE_LOGIN, ROUTE_PORTAL } from '../toolbox/constants/route'
import { useUserInfoState } from '../zustand/userInfoState'

interface IPrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute: FC<IPrivateRouteProps> = function ({ children }) {
    const { user } = useUserInfoState()
    const { info } = user

    return info.value !== '' ? children : <Navigate to={ROUTE_LOGIN} />
}

export const PrivatePlanRoute: FC<IPrivateRouteProps> = function ({
    children,
}) {
    const { user, plan } = useUserInfoState()
    const { info } = user

    return plan !== null && info.value !== '' && user.birthDay !== '' ? (
        children
    ) : (
        <Navigate to={ROUTE_PORTAL} />
    )
}
