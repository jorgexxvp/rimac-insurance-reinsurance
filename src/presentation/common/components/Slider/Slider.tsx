import { memo, ReactNode, useState } from 'react'

import { ArrowLeftIcon } from '@/presentation/toolbox/assets/icons'

import styles from './Slider.module.sass'

export type Slide = {
    id: string
    component: ReactNode
}

type Props = {
    slides: Slide[]
    children: (slide: Slide) => JSX.Element
    visibleItemsNumber?: number
}

export const Slider = memo<Props>(
    ({ slides, children, visibleItemsNumber = 1 }) => {
        const [start, setStart] = useState(0)

        const isControlsVisible = slides.length > visibleItemsNumber

        const visibleItems = isControlsVisible
            ? slides
                  .concat(slides.slice(0, visibleItemsNumber))
                  .slice(start, start + visibleItemsNumber)
            : slides

        const onNextClick = () => {
            setStart(start + 1 >= slides.length ? 0 : start + 1)
        }

        const onPrevClick = () => {
            setStart(start - 1 >= 0 ? start - 1 : slides.length - 1)
        }

        return (
            <div className={styles.slider}>
                <div className={styles.slider_slides}>
                    <ul className={styles.slider_slides_list}>
                        {visibleItems.map((slide: Slide) =>
                            children ? children(slide) : null,
                        )}
                    </ul>
                </div>
                <div className={styles.slider_group_button}>
                    <div
                        onClick={onPrevClick}
                        className={styles.slider_group_button_left}
                    >
                        <ArrowLeftIcon
                            className={styles.slider_group_button_left_icon}
                        />
                    </div>
                    <p>
                        {start + 1}
                        {' /'}
                        {slides.length}
                    </p>
                    <div
                        onClick={onNextClick}
                        className={styles.slider_group_button_right}
                    >
                        <ArrowLeftIcon
                            className={styles.slider_group_button_right_icon}
                        />
                    </div>
                </div>
            </div>
        )
    },
)
