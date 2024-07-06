import { useQuery } from '@tanstack/react-query'
import { Posts } from 'model/Posts.model'

export function PostService() {
    const { data: Postdata, isLoading: PostLoading } = useQuery<Posts[]>({
        queryKey: ['posts'],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/all`,
                    {
                        method: 'GET',
                        credentials: 'include',
                    }
                )
                const data = await res.json()
                if (!res.ok) throw new Error(data.error)
                return data
            } catch (error) {
                throw error
            }
        },
    })
    return { Postdata, PostLoading }
}
