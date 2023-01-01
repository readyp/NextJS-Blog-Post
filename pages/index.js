import Link from 'next/link'

export async function getServerSideProps() {
    const data = await fetch('http://localhost:8000/posts');
    const posts = await data.json()

    return {
        props: {
            posts
        }
    }
}

export default function HomePage({ posts }) {
    return (
        <main>
            <h1>Welcome to my blog post</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}