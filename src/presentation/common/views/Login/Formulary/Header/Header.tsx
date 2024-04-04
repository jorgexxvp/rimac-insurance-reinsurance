import { FC } from 'react'

import styles from './Header.module.sass'

export const Header: FC = () => {
    return (
        <div className={styles.form_header}>
            <div className={styles.form_header_card}>
                <p>Seguro Salud Flexible</p>
            </div>
            <h1>Creado para ti y tu familia</h1>
        </div>
    )
}
