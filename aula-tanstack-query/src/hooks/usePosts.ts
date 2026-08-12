import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/types";

const fetchPosts = async (limit: number = 10): Promise<Post[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );

    //se não funcionar...
    if(!response.ok) throw new Error("Erro ao buscar os posts");


    //se funcionar...
    return response.json();
}

export function usePosts(limit: number) {
    return useQuery<Post[]>({
        queryKey: ["posts", limit],
        queryFn: () => fetchPosts(limit),
        refetchOnWindowFocus: false, //evita refetch ao focar a aba
        refetchOnReconnect: false, //não refaz a requisição ao reconectar a internet
        staleTime: 1000 * 60 * 5, //ele vai considerar que em até 5 minutos os dados ainda são válidos, então não vai fazer requisição
    })
}