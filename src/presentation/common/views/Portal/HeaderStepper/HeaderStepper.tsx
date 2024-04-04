import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Stepper } from '@/presentation/common/components/Stepper'
import {
    ROUTE_PORTAL,
    ROUTE_SUMMARY,
} from '@/presentation/toolbox/constants/route'

import styles from './HeaderStepper.module.sass'

interface ISteps {
    label: string
    path: string
}

const steps: ISteps[] = [
    { label: 'Planes y coberturas', path: ROUTE_PORTAL },
    { label: 'Resumen', path: ROUTE_SUMMARY },
]

interface IStepProps {
    index: number
    step: ISteps
}

const Step: FC<IStepProps> = ({ step, index }) => {
    const { label, path } = step

    const { pathname } = useLocation()

    const [stepSelected, setStepSelected] = useState<string>(steps[0].path)

    useEffect(() => {
        setTimeout(() => {
            setStepSelected(pathname)
        }, 300)
    }, [])

    return (
        <div
            className={`${styles.header_stepper_desktop_step} ${path === stepSelected && styles.header_stepper_desktop_step_active}`}
        >
            <div className={styles.header_stepper_desktop_step_number}>
                <p>{index + 1}</p>
            </div>
            <div className={styles.header_stepper_desktop_step_item}>
                <p>{label}</p>
            </div>
        </div>
    )
}

interface IHaderStepperProps {
    path: string
}

export const HeaderStepper: FC<IHaderStepperProps> = ({ path }) => {
    return (
        <div className={styles.header_stepper}>
            <div className={styles.header_stepper_desktop}>
                {steps.map((step, idx) => (
                    <Step key={idx} index={idx} step={step} />
                ))}
            </div>
            <div className={styles.header_stepper_mobile}>
                <Stepper path={path} />
            </div>
        </div>
    )
}
