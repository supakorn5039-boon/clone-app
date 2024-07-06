import { useMutation } from '@tanstack/react-query'
import {
    SignUpDefaultValue,
    SignUpProps,
    signUpResolver,
} from '../model/SignUp.model'
import { useForm } from 'react-hook-form'
import ToastAlert from 'app/component/toast/ToastAlert'
import { useRouter } from 'next/router'

export function SignUpService() {
    const router = useRouter()
    const SignUpForm = useForm<SignUpProps>({
        defaultValues: SignUpDefaultValue,
        resolver: signUpResolver,
    })

    const { mutateAsync: submit } = useMutation<SignUpProps>({
        mutationFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/signup`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: SignUpForm.watch('email'),
                            username: SignUpForm.watch('username'),
                            fullName: SignUpForm.watch('fullName'),
                            password: SignUpForm.watch('password'),
                        }),
                    }
                )
                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data.error)
                }
                ToastAlert('success', 'Acoount created successfully')
                router.push('/login')
                console.log(data)
                return data
            } catch (error: any) {
                console.log(error)
                ToastAlert(
                    'error',
                    error instanceof Error
                        ? error.message
                        : 'An unknown error occurred'
                )
            }
        },
        onSuccess: () => {},
    })
    return { SignUpForm, submit }
}
