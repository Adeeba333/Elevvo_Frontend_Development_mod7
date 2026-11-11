import { useEffect, useRef } from 'react'
import type { SearchBarProps } from '../types'

function SearchBar({ value, onChange }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <input
        ref={inputRef}
        type="text"
        placeholder="Search posts by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search"
        />
    )
}

export default SearchBar