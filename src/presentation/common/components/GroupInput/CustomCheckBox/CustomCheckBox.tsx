import { FC } from 'react'

import { CheckIcon } from '@/presentation/toolbox/assets/icons'

import styles from './CustomCheckBox.module.sass'

interface ICustomCheckBoxProps {
    checked: boolean
    onChange: () => void
    variant?: 'default' | 'round'
}

export const CustomCheckBox: FC<ICustomCheckBoxProps> = ({
    onChange,
    checked,
    variant = 'default',
}) => {
    return (
        <div
            className={`${styles[`checkbox_${variant}`]} ${checked && styles[`checkbox_${variant}_selected`]}`}
            onClick={onChange}
        >
            <CheckIcon
                className={`${styles[`checkbox_${variant}_icon`]} ${checked && styles[`checkbox_${variant}_selected_icon`]}`}
            />
        </div>
    )
}
