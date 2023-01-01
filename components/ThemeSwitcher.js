import { useEffect, useState } from "react"
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
    if (typeof localStorage === "undefined") return false
    const darkMode = localStorage.getItem('isDarkMode');
    if (!darkMode) return false
    return JSON.parse(darkMode)
}

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(loadDarkMode);
    let text = isDarkMode ? 'Light Mode' : 'Dark Mode';
    const handleClick = () => {
        localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
        setIsDarkMode(prevState => !prevState)
    }

    useEffect(() => {
        text = isDarkMode ? 'Light Mode' : 'Dark Mode';
    }, [text])
    return (
        <div>
            <button
                onClick={handleClick}
                
            >{text}</button>
            {isDarkMode && <DarkTheme />}
            <style jsx>{`
                button {
                    background-color: inherit;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    color: inherit;
                }
                `}</style>
        </div>
    )
}