import { usePosts } from "../../hooks/usePosts"

export function Posts() {

    const { data, isLoading, error } = usePosts();

    return (
        <ul>
            {data?.map((post) => (
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
};