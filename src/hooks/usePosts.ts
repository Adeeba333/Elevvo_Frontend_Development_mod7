import { useQuery } from '@tanstack/react-query'
import type { Post } from '../types'

const fetchPosts = async (): Promise<Post[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }
    return res.json()
    }

    export function usePosts() {
    return useQuery({ queryKey: ['posts'], queryFn: fetchPosts })
}