import Head from 'next/head'
import Navbar from '../components/Navbar'

// Style
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <header>
                {/* Nav bar */}
                <Navbar />
            </header>
            <Component {...pageProps} />
        </>
    )
}