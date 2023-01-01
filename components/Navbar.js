import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
            <ThemeSwitcher />
            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                nav ul {
                    list-style: none;
                }

                nav ul li {
                    display: inline;
                }

                nav ul li:not(:first-child) {
                    margin-left: 1rem;
                }
                `}</style>
        </nav>
    )
}