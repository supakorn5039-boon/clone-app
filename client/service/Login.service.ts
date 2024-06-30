import { LoginDefaultValue, LoginResolver } from 'model/Login.model'
import { useForm } from 'react-hook-form'

export function LoginService() {
    const LoginForm = useForm({
        defaultValues: LoginDefaultValue,
        resolver: LoginResolver,
    })

    return { LoginForm }
}
