import React from 'react'
import '@/styles/global.css'
import HomeIndex from 'app/component/home/Index'
import { GetMeService } from 'service/GetMe.service'
import LoadingSpinner from 'app/component/skeletons/LoadingSpinner'
import { useRouter } from 'next/navigation'

const Page = () => {
    const { data, isLoading } = GetMeService()
    const router = useRouter()
    console.log(isLoading)
    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <LoadingSpinner size="lg" />
            </div>
        )
    }

    return <>{data ? <HomeIndex /> : router.push('/login')}</>
}

export default Page
