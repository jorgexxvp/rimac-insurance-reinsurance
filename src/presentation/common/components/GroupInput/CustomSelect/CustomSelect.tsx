import { FC, Fragment, useEffect, useRef, useState } from 'react'

import { ArrowDownIcon } from '@/presentation/toolbox/assets/icons'

import styles from './CustomSelect.module.sass'

interface ISelectOptions {
    label: string
    value: string
}

type EVariantGeneral = 'default' | 'outline'

interface ICustomSelectProps {
    options: ISelectOptions[]
    value: string
    onChange: (value: string) => void
    variant?: EVariantGeneral
}

export const CustomSelect: FC<ICustomSelectProps> = ({
    value,
    options,
    onChange,
    variant = 'default',
}) => {
    const targetRef = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                targetRef.current &&
                !targetRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }
        document.addEventListener('keydown', handleEscapeKeyPress)
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('keydown', handleEscapeKeyPress)
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [open])

    return (
        <Fragment>
            <div
                ref={targetRef}
                className={`${styles.select} ${variant === 'outline' && styles.select_outline}`}
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className={styles.select_value}>
                    <div className={styles.select_value_text}>{value}</div>
                    <ArrowDownIcon className={styles.select_icon} />
                </div>

                <div
                    className={`${styles.select_overlay} ${open && styles.select_overlay_open}`}
                >
                    {options.map(({ label, value }, idx) => (
                        <div
                            key={idx}
                            className={styles.select_overlay_option}
                            onClick={() => onChange(value)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
            {open && <div className={styles.select_background} />}
        </Fragment>
    )
}
