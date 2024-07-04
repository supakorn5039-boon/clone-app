import { LoginDefaultValue, LoginProps, LoginResolver } from 'model/Login.model'
import { useForm } from 'react-hook-form'

export function LoginService() {
    const LoginForm = useForm<LoginProps>({
        defaultValues: LoginDefaultValue,
        resolver: LoginResolver,
    })

    return { LoginForm }
}
