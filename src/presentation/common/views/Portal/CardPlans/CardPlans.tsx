import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { CustomButton } from '@/presentation/common/components/CustomButton/CustomButton'
import { ROUTE_SUMMARY } from '@/presentation/toolbox/constants/route'
import { IPlan } from '@/presentation/toolbox/interface/Plan'
import { useUserInfoState } from '@/presentation/zustand/userInfoState'

import styles from './CardPlans.module.sass'

interface ICardPlansProps {
    plans: IPlan
}

export const CardPlans: FC<ICardPlansProps> = ({ plans }) => {
    const { description, disccount, icon, name, price, recommended } = plans

    const navigate = useNavigate()
    const { setPlan } = useUserInfoState()

    const handlePlanSelected = () => {
        setPlan({ ...plans })
        navigate(ROUTE_SUMMARY)
    }

    return (
        <div className={`${styles.custom_card} ${styles.custom_card_large}`}>
            <div className={styles.card_plans}>
                <div className={styles.card_plans_head}>
                    {recommended && (
                        <div className={styles.card_plans_head_recommended}>
                            Plan recomendado
                        </div>
                    )}
                    <div className={styles.card_plans_head_content}>
                        <div className={styles.card_plans_head_content_body}>
                            <h3>{name}</h3>
                            <div
                                className={
                                    styles.card_plans_head_content_body_description
                                }
                            >
                                <p>Costo del plan</p>
                                <p>
                                    ${price} {disccount ? 'antes' : 'al mes'}
                                </p>
                                <p>${disccount} al mes</p>
                            </div>
                        </div>
                        <img src={icon} alt={name} />
                    </div>
                </div>
                <div className={styles.card_plans_line} />
                <div className={styles.card_plans_content}>
                    <ul>
                        {description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                    <CustomButton
                        handleSubmit={handlePlanSelected}
                        text='Seleccionar Plan'
                        variant='red'
                    />
                </div>
            </div>
        </div>
    )
}
