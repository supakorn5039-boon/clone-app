import SignUpIndex from 'app/component/signup/Index'
import LoadingSpinner from 'app/component/skeletons/LoadingSpinner'
import { useRouter } from 'next/navigation'

import React from 'react'
import { GetMeService } from 'service/GetMe.service'

export default function SignUp() {
    const { data, isLoading } = GetMeService()
    const router = useRouter()

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <LoadingSpinner size="lg" />
            </div>
        )
    }

    return <>{!data ? <SignUpIndex /> : router.push('/')}</>
}
