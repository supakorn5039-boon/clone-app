import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import type { Resolver } from 'react-hook-form'

// Yup schema definition
const SignUpSchema = yup.object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    fullName: yup.string().required(),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required(),
})

export type SignUpProps = yup.InferType<typeof SignUpSchema>

// Default values for the form
export const SignUpDefaultValue: SignUpProps = {
    email: '',
    username: '',
    fullName: '',
    password: '',
}

// Infer the type from the schema
// Yup resolver for react-hook-form
export const signUpResolver: Resolver<SignUpProps> = yupResolver(SignUpSchema)
