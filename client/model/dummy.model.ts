export type POSTSTYPE = {
    _id?: string
    text?: string
    img?: string
    user?: {
        username?: string
        profileImg?: string
        fullName?: string
    }
    comments?: [
        {
            _id?: string
            text?: string
            user?: {
                usename?: string
                profileImg?: string
                fullName?: string
            }
        }
    ]
    likes: string[]
}

export type POSTSMAP = POSTSTYPE[]

export type USERS_FOR_RIGHT_PANEL_PROPS = [
    {
        _id?: string
        fullName?: string
        username?: string
        profileImg?: string
    }
]
