import NotificationIndex from 'app/component/notification'
import LoadingSpinner from 'app/component/skeletons/LoadingSpinner'
import { useRouter } from 'next/router'
import React from 'react'
import { GetMeService } from 'service/GetMe.service'

export default function Notification() {
    const { data, isLoading } = GetMeService()
    const router = useRouter()

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <LoadingSpinner size="lg" />
            </div>
        )
    }

    if (!data) {
        router.push('/login')
        return null
    }

    return <NotificationIndex />
}
