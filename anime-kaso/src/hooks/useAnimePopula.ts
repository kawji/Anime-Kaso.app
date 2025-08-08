
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAnimePopula() {
    return useQuery({
        queryKey:['popularity'],
        queryFn: async () => {
            const response = await axios.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=10');
            return response.data
        },
        staleTime: 1000 *60 *5 // cash 5 mi
    })
}