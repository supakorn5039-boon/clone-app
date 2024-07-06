import { string } from 'yup'

export interface Posts {
    _id: string
    user: string
    text: string
    likes: string[]
    comments: Comments[]
}

export type Comments = {
    text: string
    user: Users
    _id: string
}
export interface Users {
    _id: string
    username: string
    fullName: string
    email: string
    followers: string[]
    following: string[]
    profileImg: string
    bio: string
    link: string
    likedPosts: string[]
}
