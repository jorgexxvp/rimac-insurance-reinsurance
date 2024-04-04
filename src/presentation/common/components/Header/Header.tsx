import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { LogoIcon, PhoneIcon } from '@/presentation/toolbox/assets/icons'
import { ROUTE_LOGIN } from '@/presentation/toolbox/constants/route'

import styles from './Header.module.sass'

export const Header: FC = () => {
    const { pathname } = useLocation()

    return (
        <div
            className={`${styles.header} ${pathname === ROUTE_LOGIN && styles.header_login}`}
        >
            <div className={styles.header_body}>
                <Link to={ROUTE_LOGIN}>
                    <LogoIcon className={styles.header_body_logo} />
                </Link>
                <div className={styles.header_body_routes}>
                    <Link
                        className={`${styles.header_body_routes_shop} ${styles.opacity}`}
                        to={''}
                    >
                        <p>¡Compra por este medio!</p>
                    </Link>
                    <Link
                        to={''}
                        className={`${styles.header_body_routes_contact} ${styles.opacity}`}
                    >
                        <PhoneIcon width={20} height={20} />
                        <p>(01) 411 6001</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
