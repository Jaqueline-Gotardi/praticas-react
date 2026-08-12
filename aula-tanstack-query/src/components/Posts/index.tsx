import { usePosts } from "../../hooks/usePosts"

export function Posts() {

    const { data, isLoading, error } = usePosts(10);

    if(isLoading) {
        return <p>Carregando. . .</p>
    }

    if(error) {
        <p>ocorreu um erro ao buscar os post: {error.message}</p>
    }

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