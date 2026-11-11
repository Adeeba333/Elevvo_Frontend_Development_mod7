import PostCard from './PostCard'
import type { PostListProps } from '../types'

function PostList({ posts }: PostListProps) {
    if (posts.length === 0) {
        return <p>No posts match your search.</p>
    }

    return (
        <div className="grid">
        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
        </div>
    )
}

export default PostList