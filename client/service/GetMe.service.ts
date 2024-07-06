import { useQuery } from '@tanstack/react-query'
import { GetMeType } from '../model/GetMe.model'

export function GetMeService() {
    const { data, isLoading } = useQuery<GetMeType>({
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/me`,

                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                )
                const data = await res.json()
                if (!res.ok) {
                    throw new Error(data.error)
                }
                return data.data
            } catch (error) {
                throw new Error((error as Error).message)
            }
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        retry: false,
    })
    return { data, isLoading }
}
