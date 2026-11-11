export interface Post {
    id: number
    userId: number
    title: string
    body: string
    }

    export interface PostCardProps {
    post: Post
    }

    export interface PostListProps {
    posts: Post[]
    }

    export interface SearchBarProps {
    value: string
    onChange: (value: string) => void
}