import axios from "axios"
import { useQuery } from "@tanstack/react-query"

export function useAnimeList( page:number ) {
    return useQuery({
        queryKey:['anime',page],
        queryFn: async () => {
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`);
            return data.data
        },
        staleTime: 1000 * 60 * 5, // แคชไว้ 5 นาที
    })
}
