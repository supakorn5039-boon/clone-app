import ProfileIndex from 'app/component/profile'
import ProfileHeaderSkeleton from 'app/component/skeletons/ProfileHeaderSkeletion'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GetMeService } from 'service/GetMe.service'

export default function Profile() {
    const { data, isLoading } = GetMeService()
    const router = useRouter()
    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center">
                <ProfileHeaderSkeleton />
            </div>
        )
    }

    return <>{data ? <ProfileIndex /> : router.push('/login')}</>
}
