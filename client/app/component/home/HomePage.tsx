import { useState } from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'

const HomePage = () => {
    const [feedType, setFeedType] = useState('forYou')

    return (
        <>
            <div className="flex-[4_4_0] mr-auto border-r border-gray-700 min-h-screen">
                <div className="flex w-full border-b border-gray-700">
                    <div
                        className={
                            'flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative'
                        }
                        onClick={() => setFeedType('forYou')}
                    >
                        For you
                        {feedType === 'forYou' && (
                            <div className="absolute bottom-0 w-10  h-1 rounded-full bg-primary"></div>
                        )}
                    </div>
                    <div
                        className="flex justify-center flex-1 p-3 hover:bg-secondary transition duration-300 cursor-pointer relative"
                        onClick={() => setFeedType('following')}
                    >
                        Following
                        {feedType === 'following' && (
                            <div className="absolute bottom-0 w-10  h-1 rounded-full bg-primary"></div>
                        )}
                    </div>
                </div>

                <CreatePost />

                {/* POSTS */}
                <Posts />
            </div>
        </>
    )
}
export default HomePage