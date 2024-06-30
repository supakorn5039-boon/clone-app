import { SignUpDefaultValue, signUpResolver } from '../model/SignUp.model'
import { useForm } from 'react-hook-form'

export function SignUpService() {
    const SignUpForm = useForm({
        defaultValues: SignUpDefaultValue,
        resolver: signUpResolver,
    })

    return { SignUpForm }
}
