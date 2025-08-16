import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetDetail(id: number | string) {
    return useQuery({
        queryKey: ['animeDetail', id],
        enabled: !!id,
        queryFn: async () => {
            const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
            return data.data;
        },
        staleTime: 1000 * 60 * 5,
    })
}