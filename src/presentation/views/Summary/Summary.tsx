import { FC } from 'react'

import PersonsIcon from '@/presentation/assets/svg/group.svg'
import { useUserInfoState } from '@/presentation/zustand/userInfoState'

import styles from './Summary.module.sass'

export const Summary: FC = () => {
    const { user, plan } = useUserInfoState()

    const { name, info } = user

    return (
        <div className={styles.summary}>
            <h1>Resumen del seguro </h1>
            <div
                className={`${styles.custom_card} ${styles.custom_card_broad}`}
            >
                <div className={styles.summary_card}>
                    <div className={styles.summary_card_head}>
                        <p>Precios calculados para:</p>
                        <div>
                            <img src={PersonsIcon} />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div className={styles.summary_card_line} />
                    <div className={styles.summary_card_payment}>
                        <p>Responsable de pago</p>
                        <p>
                            {info.type}: {info.value}
                        </p>
                        <p>Celular: {info.phone}</p>
                    </div>
                    <div className={styles.summary_card_plan}>
                        <p>Plan elegido</p>
                        <p>{plan?.name}</p>
                        <p>Costo del Plan: ${plan?.disccount} al mes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
