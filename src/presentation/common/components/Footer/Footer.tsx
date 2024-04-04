import { FC } from 'react'

import { LogoIcon, LogoMobileIcon } from '@/presentation/toolbox/assets/icons'

import styles from './Footer.module.sass'

export const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_body}>
                <LogoIcon
                    width={85.39}
                    height={42}
                    className={styles.footer_body_logo_desktop}
                />
                <LogoMobileIcon
                    width={138}
                    height={20}
                    className={styles.footer_body_logo_mobile}
                />
                <div className={styles.footer_body_line} />
                <p>© 2023 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}
