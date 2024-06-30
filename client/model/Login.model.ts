import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import type { Resolver } from 'react-hook-form'

const LoginSchema = yup.object({
    username: yup.string().required(),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required(),
})

export type LoginProps = yup.InferType<typeof LoginSchema>

export const LoginDefaultValue: LoginProps = {
    username: '',
    password: '',
}

export const LoginResolver: Resolver<LoginProps> = yupResolver(LoginSchema)
