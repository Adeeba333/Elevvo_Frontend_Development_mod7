import { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import PostList from './components/PostList'
import { usePosts } from './hooks/usePosts'
import { useThemeStore } from './store/themeStore'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const theme = useThemeStore((state) => state.theme)
  const { data, isLoading, isError, error } = usePosts()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const filtered = (data ?? []).filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <Header />
      <SearchBar value={search} onChange={setSearch} />

      {isLoading && <p>Loading posts...</p>}
      {isError && <p role="alert">Something went wrong: {error.message}</p>}
      {data && <PostList posts={filtered} />}
    </div>
  )
}

export default App