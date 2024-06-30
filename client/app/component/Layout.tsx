import React from 'react'
import { ToastProvider } from './toast/ToastAlert'
import Sidebar from './UI/Sidebar'
import RightPanel from './UI/RightPanel'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-1 m-4"> {children}</div>
            <RightPanel />
            <ToastProvider />
        </div>
    )
}

export default RootLayout
