import { FC, useEffect, useState } from 'react'

import { clientPlanApi, clientUserApi } from '@/core/index'
import { CustomCheckBox } from '@/presentation/common/components/GroupInput'
import { Loading } from '@/presentation/common/components/Loading'
import { Slide, Slider } from '@/presentation/common/components/Slider/Slider'
import { CardPlans } from '@/presentation/common/views/Portal/CardPlans'
import { HomeIcon, HospitalIcon } from '@/presentation/toolbox/assets/icons'
import { IPlan } from '@/presentation/toolbox/interface/Plan'
import { portalMocks } from '@/presentation/toolbox/mocks/PortalMocks'
import { useUserInfoState } from '@/presentation/zustand/userInfoState'

import { EOptionQuote } from './Portal.interface'
import styles from './Portal.module.sass'

export const Portal: FC = () => {
    const { user, setUser } = useUserInfoState()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [options, setOptions] = useState<EOptionQuote | null>(null)
    const [plans, setPLans] = useState<IPlan[]>([])
    const slides = plans.map((plan, idx) => ({
        id: idx.toString(),
        component: <CardPlans key={idx} plans={plan} />,
    }))
    const handleSelectedOption = async (value: EOptionQuote) => {
        setOptions(value)
        try {
            const { list } = await clientPlanApi.GetPlans()
            setPLans([
                { ...list[0], icon: HomeIcon, recommended: false },
                { ...list[1], icon: HospitalIcon, recommended: true },
                { ...list[3], icon: HomeIcon, recommended: false },
            ])
        } catch (error) {
            alert('Fallo al traer informacion intentelo mas tarde')
        }
    }

    useEffect(() => {
        const handleUserApi = async () => {
            try {
                setIsLoading(true)
                const userApi = await clientUserApi.GetUser()
                setIsLoading(false)
                const { birthDay, lastName, name } = userApi
                setUser({ ...user, birthDay, lastName, name })
            } catch (error) {
                setIsLoading(true)
                alert('Fallo al traer informacion intentelo mas tarde')
            }
        }

        handleUserApi()
    }, [])

    if (isLoading) {
        return (
            <div className={styles.grid_system_layout}>
                <div className={styles.portal_loading}>
                    <Loading />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.portal}>
            <div className={styles.portal_head}>
                <div className={styles.portal_head_title}>
                    <h1>{user.name} ¿Para quién deseas cotizar?</h1>
                    <p>
                        Selecciona la opción que se ajuste más a tus
                        necesidades.
                    </p>
                </div>
                <div className={styles.portal_head_options}>
                    {portalMocks.map(({ content, icon, title, value }, idx) => {
                        const selectedCard = options === value

                        return (
                            <div
                                className={`${styles.card} ${styles.custom_card} ${styles.custom_card_short} ${selectedCard && styles.custom_card_selected}`}
                                onClick={() => handleSelectedOption(value)}
                                key={idx}
                            >
                                <div className={styles.card_checkbox}>
                                    <CustomCheckBox
                                        checked={selectedCard}
                                        onChange={() => {}}
                                        variant='round'
                                    />
                                </div>
                                <div className={styles.card_content}>
                                    {icon}
                                    <h3>{title}</h3>
                                    <p>{content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {plans.length > 0 && (
                <>
                    <div className={styles.portal_body}>
                        {plans.map((plans, idx) => (
                            <CardPlans key={idx} plans={plans} />
                        ))}
                    </div>
                    <div className={styles.portal_body_mobile}>
                        <Slider slides={slides} visibleItemsNumber={1}>
                            {(slide: Slide) => <div>{slide.component}</div>}
                        </Slider>
                    </div>
                </>
            )}
        </div>
    )
}
