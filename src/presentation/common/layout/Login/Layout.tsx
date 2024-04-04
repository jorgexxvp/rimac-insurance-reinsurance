import { FC, ReactNode } from 'react'

import { Footer } from '@/presentation/common/components/Footer'
import { Header } from '@/presentation/common/components/Header'

import styles from './Layout.module.sass'

interface ILayoutProps {
    children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <article className={styles.layout}>
            <Header />
            <div className={styles.layout_content}>
                <section className={styles.layout_content_grid}>
                    <section>{children}</section>
                </section>
                <Footer />
            </div>
        </article>
    )
}
