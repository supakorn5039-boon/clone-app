import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import type { Resolver } from 'react-hook-form'

const CreatePostSchema = yup
    .object()
    .shape({
        text: yup.string(),
        img: yup.mixed<File>().test('fileSize', 'File too large', (value) => {
            if (!value) return true
            return (value as File).size <= 1048576
        }),
    })
    .test('at-least-one', 'Text or Image is required', (obj) => {
        return !!obj.text || !!obj.img
    })

export type CreatePostsProps = yup.InferType<typeof CreatePostSchema>

export const CreatePostDefaultValue: CreatePostsProps = {
    text: '',
    img: undefined,
}

export const CreatePostResolver: Resolver<CreatePostsProps> =
    yupResolver(CreatePostSchema)
