import { PersonAddIcon, PersonIcon } from '@/presentation/toolbox/assets/icons'

import {
    EOptionQuote,
    IOptionsQuote,
} from '../../views/Portal/Portal.interface'

export const portalMocks: IOptionsQuote[] = [
    {
        icon: <PersonIcon />,
        title: 'Para mi',
        content:
            'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
        value: EOptionQuote.FOR_ME,
    },
    {
        icon: <PersonAddIcon />,
        title: 'Para alguien más',
        content:
            'Realiza una cotización para uno de tus familiares o cualquier persona.',
        value: EOptionQuote.FOR_SOMEONE_ELSE,
    },
]
