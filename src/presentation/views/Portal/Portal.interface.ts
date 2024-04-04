import { ReactNode } from 'react'

export enum EOptionQuote {
    FOR_ME = 'FOR_ME',
    FOR_SOMEONE_ELSE = 'FOR_SOMEONE_ELSE',
}

export interface IOptionsQuote {
    icon: ReactNode
    title: string
    content: string
    value: EOptionQuote
}
