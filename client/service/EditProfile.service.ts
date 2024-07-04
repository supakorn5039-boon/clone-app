import {
    EditDefaultValue,
    EditProps,
    EditResolver,
} from 'model/EditProfile.model'
import { useForm } from 'react-hook-form'

export function EditProfileService() {
    const EditProfileForm = useForm<EditProps>({
        defaultValues: EditDefaultValue,
        resolver: EditResolver,
    })

    return { EditProfileForm }
}
