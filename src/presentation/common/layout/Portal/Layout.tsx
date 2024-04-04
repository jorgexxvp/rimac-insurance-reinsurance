import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { ArrowLeftIcon } from '@/presentation/toolbox/assets/icons'

import { HeaderStepper } from '../../views/Portal/HeaderStepper'
import styles from './Layout.module.sass'

interface IPortalProps {
    children: ReactNode
    path: string
}

export const Layout: FC<IPortalProps> = ({ children, path }) => {
    return (
        <div className={`${styles.grid_system_layout} ${styles.portal_layout}`}>
            <div className={styles.portal_layout_body}>
                <HeaderStepper path={path} />
                <div className={styles.portal_layout_body_content}>
                    <Link to={path}>
                        <div className={styles.portal_layout_body_content_back}>
                            <figure>
                                <ArrowLeftIcon width={15} height={15} />
                            </figure>
                            <p>Volver</p>
                        </div>
                    </Link>
                    {children}
                </div>
            </div>
        </div>
    )
}
