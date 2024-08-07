import { useMutation, useQueryClient } from '@tanstack/react-query'
import ToastAlert from 'app/component/toast/ToastAlert'
import { LoginDefaultValue, LoginProps, LoginResolver } from 'model/Login.model'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export function LoginService() {
    const queryClient = useQueryClient()
    const router = useRouter()
    const LoginForm = useForm<LoginProps>({
        defaultValues: LoginDefaultValue,
        resolver: LoginResolver,
    })

    const { mutateAsync: Login, isPending } = useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/login`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                        body: JSON.stringify({
                            username: LoginForm.watch('username'),
                            password: LoginForm.watch('password'),
                        }),
                    }
                )

                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data.error)
                }
                ToastAlert('success', 'Login Success')
                router.push('/')
                return data
            } catch (error: any) {
                console.log(error)
                ToastAlert(
                    'error',
                    error instanceof Error
                        ? error.message
                        : 'An unknown error occurred'
                )
                throw error
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUser'] })
        },
    })

    return { LoginForm, Login, isPending }
}
