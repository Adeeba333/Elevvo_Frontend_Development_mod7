import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import PostCard from './PostCard'
import type { Post } from '../types'

describe('PostCard', () => {
    it('renders the post title and body', () => {
        const post: Post = {
        id: 1,
        userId: 1,
        title: 'Hello TypeScript',
        body: 'Typed props make bugs easier to catch.',
        }

        render(<PostCard post={post} />)

        expect(screen.getByText('Hello TypeScript')).toBeInTheDocument()
        expect(
        screen.getByText('Typed props make bugs easier to catch.')
        ).toBeInTheDocument()
    })
})