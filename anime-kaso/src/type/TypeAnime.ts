export type TypeAnime = {
    mal_id:number;
    title: string;
    images: {
        jpg: {
        image_url: string;
        };
    };
    favorites: number;
    popularity: number;
}