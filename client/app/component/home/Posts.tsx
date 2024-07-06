import Post from './Post'
import PostSkeleton from '../skeletons/PostSkeleton'
import { POSTS } from 'utils/db/dummy'
import { PostService } from 'service/Post.service'

const Posts = ({ feedType }: any) => {
    const { Postdata, PostLoading } = PostService()
    return (
        <>
            {PostLoading && (
                <div className="flex flex-col justify-center">
                    <PostSkeleton />
                    <PostSkeleton />
                    <PostSkeleton />
                </div>
            )}
            {!PostLoading && Postdata?.length === 0 && (
                <p className="text-center my-4">
                    No posts in this tab. Switch 👻
                </p>
            )}
            {!PostLoading && Postdata && (
                <div>
                    {Postdata.map((post) => (
                        <Post key={post._id} post={post} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Posts
