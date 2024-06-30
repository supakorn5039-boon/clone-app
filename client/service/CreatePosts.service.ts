import { useForm } from 'react-hook-form'
import {
    CreatePostDefaultValue,
    CreatePostResolver,
} from 'model/CreatePosts.model'

export function CreatePostService() {
    const CreatePostForm = useForm({
        defaultValues: CreatePostDefaultValue,
        resolver: CreatePostResolver,
    })

    return { CreatePostForm }
}
