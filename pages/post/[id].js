export async function getServerSideProps({ params: { id } }) {
    const data = await fetch(`http://localhost:8000/posts/${id}`);
    const post = await data.json();
    return {
        props: {
            post
        }
    }
}

export default function PostPage({ post }) {
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )
}