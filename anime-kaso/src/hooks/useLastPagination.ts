import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export function useLastPagination(path:string) {
return useQuery({
    queryKey:['path',path],
    queryFn: async () => {
        const { data } = await axios.get(path);
        return data
    },
    staleTime: 1000 * 60 * 5
})
}