import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CustomButton } from '@/presentation/common/components/CustomButton/CustomButton'
import {
    CustomCheckBox,
    CustomInput,
    CustomSelect,
} from '@/presentation/common/components/GroupInput'
import { ROUTE_PORTAL } from '@/presentation/toolbox/constants/route'
import { EDocumentUser } from '@/presentation/toolbox/enum/user'
import { useUserInfoState } from '@/presentation/zustand/userInfoState'

import styles from './Body.module.sass'

const optionsDocuments = [
    { label: 'DNI', value: EDocumentUser.DNI },
    { label: 'CE', value: EDocumentUser.CE },
]

export const Body: FC = () => {
    const navigate = useNavigate()

    const { user, setUser } = useUserInfoState()

    const [document, setDocument] = useState<EDocumentUser>(EDocumentUser.DNI)

    const [numberDocument, setNumberDocument] = useState<string>('')
    const [errorNumberDocument, setErrorNumberDocument] = useState(false)

    const [phone, setPhone] = useState<string>('')
    const [errorPhone, setErrorPhone] = useState(false)

    const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)
    const [communicationsPolicy, setCommunicationsPolicy] =
        useState<boolean>(false)

    const handleChangeNumberDocument = (value: string) => {
        const isValidNumber = /^\d+$/.test(value)

        if (isValidNumber && value.length <= 8) {
            setNumberDocument(value)
            setErrorNumberDocument(false)
        } else if (!isValidNumber && value.length === 0) {
            setNumberDocument(value)
            setErrorNumberDocument(false)
        }
    }

    const handleBlurNumberDocument = (value: string) => {
        if (value.length < 8) setErrorNumberDocument(true)
    }

    const handleChangePhone = (value: string) => {
        const isValidNumber = /^\d+$/.test(value)

        if (isValidNumber && value.length <= 9) {
            setPhone(value)
            setErrorPhone(false)
        } else if (!isValidNumber && value.length === 0) {
            setPhone(value)
            setErrorPhone(false)
        }
    }

    const handleBlurPhone = (value: string) => {
        if (value.length < 9) setErrorPhone(true)
    }

    const handleSumbit = () => {
        if (!disabledButton) {
            setUser({
                ...user,
                info: {
                    type: document,
                    value: numberDocument,
                    phone: Number(phone),
                },
            })
            navigate(ROUTE_PORTAL)
        }
    }

    const disabledButton =
        errorNumberDocument ||
        errorPhone ||
        !privacyPolicy ||
        !communicationsPolicy

    return (
        <div className={styles.formulary}>
            <p>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
            </p>

            <div className={styles.formulary_form}>
                <div className={styles.formulary_form_numberDocument}>
                    <div className={styles.formulary_form_numberDocument_input}>
                        <CustomSelect
                            options={optionsDocuments}
                            onChange={(value) =>
                                setDocument(value as EDocumentUser)
                            }
                            value={document}
                            variant='outline'
                        />
                        <CustomInput
                            value={numberDocument}
                            onChange={(value) =>
                                handleChangeNumberDocument(String(value))
                            }
                            onBlur={(value) =>
                                handleBlurNumberDocument(String(value))
                            }
                            placeholder='Nro. de doc'
                            variant='outline'
                        />
                    </div>
                    {errorNumberDocument && (
                        <p className={styles.input_error_message}>
                            Numero de documento inválido.
                        </p>
                    )}
                </div>
                <div className={styles.formulary_form_phone}>
                    <CustomInput
                        value={phone}
                        onChange={(value) => handleChangePhone(String(value))}
                        onBlur={(value) => handleBlurPhone(String(value))}
                        placeholder='Celular'
                    />
                    {errorPhone && (
                        <p className={styles.input_error_message}>
                            Numero de celular inválido.
                        </p>
                    )}
                </div>
            </div>

            <div className={styles.formulary_policy}>
                <div>
                    <CustomCheckBox
                        checked={privacyPolicy}
                        onChange={() => setPrivacyPolicy((prev) => !prev)}
                    />
                    <p>Acepto lo Política de Privacidad</p>
                </div>
                <div>
                    <CustomCheckBox
                        checked={communicationsPolicy}
                        onChange={() =>
                            setCommunicationsPolicy((prev) => !prev)
                        }
                    />
                    <p>Acepto la Política Comunicaciones Comerciales</p>
                </div>
                <Link to={''}>
                    <p className={styles.formulary_policy_terms_Conditions}>
                        Aplican Términos y Condiciones.
                    </p>
                </Link>
            </div>

            <CustomButton
                handleSubmit={handleSumbit}
                variant='black'
                text='Cotiza aquí'
                disabled={disabledButton}
            />
        </div>
    )
}
