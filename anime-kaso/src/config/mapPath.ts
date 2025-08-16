export const mapPath = {
  '/': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`,

  '/anime': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`,

  '/show': (page: number) =>
    `https://api.jikan.moe/v4/anime?status=airing&page=${page}&limit=25`, // อาจใช้ SFW filter ถ้ามี subtitle

  '/noshow': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`, // ยังไม่มี tag สำหรับเสียงไทยใน Jikan

  '/animeNoHentei': (page: number) =>
    `https://api.jikan.moe/v4/anime?sfw=true&status=airing&page=${page}&limit=25`, // อาจใช้ SFW filter ถ้ามี subtitle

  '/animehentai': (page: number) =>
    `https://api.jikan.moe/v4/anime?genres=12&order_by=start_date&sort=desc&page=${page}&limit=25`, // Hentai genre ID = 12

  '/animemovie': (page: number) =>
    `https://api.jikan.moe/v4/anime?type=movie&order_by=start_date&sort=desc&page=${page}&limit=25`,

  '/noend': (page: number) =>
    `https://api.jikan.moe/v4/anime?status=airing&order_by=start_date&sort=desc&page=${page}&limit=25`, // ยังไม่จบ

  '/end': (page: number) =>
    `https://api.jikan.moe/v4/anime?status=complete&order_by=start_date&sort=desc&page=${page}&limit=25` // จบแล้ว
};
