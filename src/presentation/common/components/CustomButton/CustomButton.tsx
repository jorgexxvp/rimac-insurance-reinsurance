import { FC } from 'react'

import styles from './CustomButton.module.sass'

interface ICustomButtonProps {
    handleSubmit: () => void
    variant?: 'red' | 'black'
    text: string
    disabled?: boolean
}

export const CustomButton: FC<ICustomButtonProps> = ({
    variant = 'default',
    handleSubmit,
    text,
    disabled = false,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={handleSubmit}
            className={`${styles[`button_${variant}`]}`}
        >
            {text}
        </button>
    )
}
