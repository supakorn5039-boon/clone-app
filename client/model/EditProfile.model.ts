import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import type { Resolver } from 'react-hook-form'

const EditSchema = yup.object({
    fullName: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    bio: yup.string(),
    link: yup.string(),
    newPassword: yup
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .required(),
    currentPassword: yup.string().required(),
})

export type EditProps = yup.InferType<typeof EditSchema>
export const EditDefaultValue: EditProps = {
    fullName: '',
    username: '',
    email: '',
    bio: '',
    link: '',
    newPassword: '',
    currentPassword: '',
}

export const EditResolver: Resolver<EditProps> = yupResolver(EditSchema)
