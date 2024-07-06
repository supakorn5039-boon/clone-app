import React from 'react'
import { ToastProvider } from './toast/ToastAlert'
import Sidebar from './UI/Sidebar'
import RightPanel from './UI/RightPanel'
import { GetMeService } from 'service/GetMe.service'
import LoadingSpinner from './skeletons/LoadingSpinner'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const { data } = GetMeService()

    return (
        <div className="flex flex-row">
            {data ? <Sidebar /> : null}
            <div className="flex-1 m-4"> {children}</div>
            {data ? <RightPanel /> : null}
            <ToastProvider />
        </div>
    )
}

export default RootLayout
