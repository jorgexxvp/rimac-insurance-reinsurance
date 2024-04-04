import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowLeftIcon } from '@/presentation/toolbox/assets/icons'

import styles from './Stepper.module.sass'

interface IStepperProps {
    path: string
}

export const Stepper: FC<IStepperProps> = ({ path }) => {
    const navigate = useNavigate()

    const [step, setStep] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            setStep(2)
        }, 500)
    }, [])

    return (
        <div className={styles.stepper}>
            <div className={styles.stepper_step}>
                <div
                    className={styles.stepper_step_icon}
                    onClick={() => navigate(path)}
                >
                    <ArrowLeftIcon className={styles.stepper_step_icon_arrow} />
                </div>
                <div className={styles.stepper_step_text}>
                    Paso{' '}
                    <span className={styles.stepper_step_text_step}>
                        {step}
                    </span>
                    de 2
                </div>
            </div>
            <div
                className={`${styles.stepper_bar} ${step === 2 && styles.stepper_bar_completed}`}
            />
        </div>
    )
}
