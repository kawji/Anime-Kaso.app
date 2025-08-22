export type ObjWatch = {
    
}

export const mapPlatformList = {
    netflix: { pathname:'Netflix' ,name:'Netflix' },
    youtube: { pathname:'YouTube' ,name:'YouTube' },
    amazon: { pathname:'AmazonPrimeVideo' ,name:'Amazon Prime Video' },
    bilibili: { pathname:'Bilibili' ,name:'Bilibili' },
    crunchyroll: { pathname:'Crunchyroll' ,name:'Crunchyroll' },
    funimation: { pathname:'Funimation' ,name:'Funimation' },
} as const;

export type KeyPlatformList = keyof typeof mapPlatformList

