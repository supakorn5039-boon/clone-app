import { useMutation, useQueryClient } from '@tanstack/react-query'
import ToastAlert from 'app/component/toast/ToastAlert'
import { useRouter } from 'next/router'

export function LogOutService() {
    const queryClient = useQueryClient()
    const router = useRouter()
    const { mutateAsync: Logout } = useMutation({
        mutationFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/logout`,
                    {
                        method: 'POST',
                        credentials: 'include',
                    }
                )
                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data.error)
                }
                ToastAlert('success', 'Logout Success')
                router.push('/login')
                return data
            } catch (error: any) {
                ToastAlert(
                    'error',
                    error instanceof Error
                        ? error.message
                        : 'An unknown error occurred'
                )
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['authUser'] })
        },
    })
    return { Logout }
}
