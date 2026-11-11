import type { PostCardProps } from '../types'

function PostCard({ post }: PostCardProps) {
    return (
        <article className="card">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </article>
    )
}

export default PostCard