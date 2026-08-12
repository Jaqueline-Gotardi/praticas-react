import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/types";

export function usePosts(limit: number) {
    return useQuery<Post[]>({
        queryKey: ["posts", limit],
        queryFn: () => fetchPosts(limit),
        refetchOnWindowFocus: false, //evita refetch ao focar a aba
        refetchOnReconnect: false, //não refaz a requisição ao reconectar a internet
        staleTime: 1000 * 60 * 5, //ele vai considerar que em até 5 minutos os dados ainda são válidos, então não vai fazer requisição
    })
}