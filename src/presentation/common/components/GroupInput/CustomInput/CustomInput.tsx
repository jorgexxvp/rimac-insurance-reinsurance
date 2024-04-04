import { FC, ReactNode } from 'react'

import styles from './CustomInput.module.sass'

type EVariantGeneral = 'default' | 'outline'

interface ICustomInputProps<T> {
    value: string
    onChange: (value: T) => void
    onBlur?: (value: T) => void
    placeholder?: string
    variant?: EVariantGeneral
}

export const CustomInput: FC<ICustomInputProps<ReactNode>> = ({
    onChange,
    value,
    onBlur,
    placeholder,
    variant,
}) => {
    return (
        <input
            className={`${styles['e-placeholder']} ${styles.input} ${variant === 'outline' && styles.input_outline}`}
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => onBlur?.(e.target.value)}
            value={value}
            placeholder={placeholder}
        />
    )
}
