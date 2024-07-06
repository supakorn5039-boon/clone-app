import LoginIndex from 'app/component/login/Index'
import React from 'react'
import { GetMeService } from 'service/GetMe.service'
import LoadingSpinner from 'app/component/skeletons/LoadingSpinner'
import { useRouter } from 'next/navigation'

export default function Login() {
    const { data, isLoading } = GetMeService()
    const router = useRouter()

    if (isLoading)
        <div className="h-screen flex justify-center items-center">
            <LoadingSpinner size="lg" />
        </div>

    return <>{!data ? <LoginIndex /> : router.push('/')}</>
}
