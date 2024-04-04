import { FC } from 'react'

import styles from './Loading.module.sass'

export const Loading: FC = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loading_body}>
                {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} />
                ))}
            </div>
        </div>
    )
}
