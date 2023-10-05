import { ChangeEvent, FormEvent } from 'react'


export interface Props {
    qrcode: string;
    handleChange: (HandleInputChange: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>)  => void
}