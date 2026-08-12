import { useQuery } from "@tanstack/react-query";
import type { Post } from "../types/types";

export function usePosts(limit: number) {
    return useQuery<Post[]>({
        queryKey: ["posts", limit],
        queryFn: () => fetchPosts(limit),
        refetchOnWindowFocus: false 
    })
}