import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useAnimeList(page: number, pageName: string) {
    return useQuery({
        queryKey: ['anime', page, pageName],
        queryFn: async () => {
            const baseUrl = 'https://api.jikan.moe/v4';
            let endpoint = '';

            switch (pageName) {
                case '/':
                    endpoint = `${baseUrl}/anime?order_by=start_date&sort=desc&page=${page}&limit=25`;
                    break;
                case '/anime':
                    endpoint = `${baseUrl}/anime?order_by=title&sort=asc&page=${page}&limit=25`;
                    break;
                case '/subthai':
                    endpoint = `${baseUrl}/anime?filter=airing&order_by=title&sort=asc&page=${page}&limit=25`;
                    break;
                case '/thai':
                    endpoint = `${baseUrl}/anime?filter=airing&order_by=title&sort=asc&page=${page}&limit=25`;

                    break;
                case '/animehentai':
                    endpoint = `${baseUrl}/anime?sfw=false&rating=rx&page=${page}&limit=25`;
                    break;
                case '/animemovie':
                    endpoint = `${baseUrl}/anime?type=movie&page=${page}&limit=25`;
                    break;
                case '/noend':
                    endpoint = `${baseUrl}/anime?filter=airing&page=${page}&limit=25`;
                    break;
                case '/end':
                    endpoint = `${baseUrl}/anime?page=${page}&limit=25&order_by=members&sort=desc`;
                    break;
                default:
                    throw new Error('Invalid page name');
            }

            const { data } = await axios.get(endpoint);
            return data;
        },
        staleTime: 1000 * 60 * 5,
    });
}
