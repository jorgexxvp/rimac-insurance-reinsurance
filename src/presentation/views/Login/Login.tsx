import { FC } from 'react'

import { Body } from '@/presentation/common/views/Login/Formulary/Body'
import { Header } from '@/presentation/common/views/Login/Formulary/Header'
import { BannerImage } from '@/presentation/toolbox/assets/images'

import styles from './Login.module.sass'

export const Login: FC = () => {
    return (
        <div className={`${styles.grid_system_layout} ${styles.login}`}>
            <div className={styles.login_circle_violet} />
            <div className={styles.login_circle_skye} />
            <div className={styles.login_image_wrapper}>
                <img src={BannerImage} alt='Rimac seguros banner' />
            </div>
            <div className={styles.login_formulary}>
                <Header />
                <Body />
            </div>
            <div className={styles.login_mobile}>
                <div className={styles.login_mobile_header}>
                    <Header />
                    <img src={BannerImage} alt='Rimac seguros banner' />
                </div>
                <div className={styles.login_mobile_line} />
                <Body />
            </div>
        </div>
    )
}
