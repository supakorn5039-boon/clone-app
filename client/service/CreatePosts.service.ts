import { useForm } from 'react-hook-form'
import {
    CreatePostDefaultValue,
    CreatePostResolver,
    CreatePostsProps,
} from 'model/CreatePosts.model'

export function CreatePostService() {
    const CreatePostForm = useForm<CreatePostsProps>({
        defaultValues: CreatePostDefaultValue,
        resolver: CreatePostResolver,
    })

    return { CreatePostForm }
}
