import { useThemeStore } from '../store/themeStore'

function ThemeToggle() {
    const theme = useThemeStore((state) => state.theme)
    const toggleTheme = useThemeStore((state) => state.toggleTheme)

    return (
        <button onClick={toggleTheme} className="toggle-btn">
        {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
    )
}

export default ThemeToggle