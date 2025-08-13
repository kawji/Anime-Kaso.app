const mapPath = {
  '/': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`,

  '/anime': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`,

  '/subthai': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`, // อาจใช้ SFW filter ถ้ามี subtitle

  '/thai': (page: number) =>
    `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&page=${page}&limit=25`, // ยังไม่มี tag สำหรับเสียงไทยใน Jikan

  '/animehentai': (page: number) =>
    `https://api.jikan.moe/v4/anime?genres=12&order_by=start_date&sort=desc&page=${page}&limit=25`, // Hentai genre ID = 12

  '/animemovie': (page: number) =>
    `https://api.jikan.moe/v4/anime?type=movie&order_by=start_date&sort=desc&page=${page}&limit=25`,

  '/noend': (page: number) =>
    `https://api.jikan.moe/v4/anime?status=airing&order_by=start_date&sort=desc&page=${page}&limit=25`, // ยังไม่จบ

  '/end': (page: number) =>
    `https://api.jikan.moe/v4/anime?status=complete&order_by=start_date&sort=desc&page=${page}&limit=25` // จบแล้ว
};
