import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useAnimeList(path: string) {
    return useQuery({
        queryKey: ['anime',path],
        queryFn: async () => {
            const { data } = await axios.get(path);
            return data;
        },
        staleTime: 1000 * 60 * 5,
    });
}
