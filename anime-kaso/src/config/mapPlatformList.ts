import Netflix from "@/components/ui/icons/netflix";
import YouTube from "@/components/ui/icons/youTube";
import AmazonPrimeVideo from "@/components/ui/icons/amazonPrimeVideo";
import Bilibili from "@/components/ui/icons/bilibili";
import Crunchyroll from "@/components/ui/icons/crunchyroll";
import Funimation from "@/components/ui/icons/funimation";
import Iq from "@/components/ui/icons/iq";


export type ObjPlatform = {
    pathname: React.ComponentType;
    name: string;
    url:string;
}

export type recordPlatform = Record<string,ObjPlatform>

export const mapPlatform:recordPlatform = {
    netflix: { pathname: Netflix ,name:'Netflix' ,url:'https://www.netflix.com/th/' },
    youtube: { pathname:YouTube ,name:'YouTube' ,url:'https://www.youtube.com/' },
    amazon: { pathname:AmazonPrimeVideo ,name:'Amazon Prime Video' ,url:'https://www.primevideo.com/' },
    bilibili: { pathname:Bilibili ,name:'Bilibili' ,url:'https://www.bilibili.tv/th/' },
    crunchyroll: { pathname:Crunchyroll ,name:'Crunchyroll' ,url:'https://www.crunchyroll.com/' },
    funimation: { pathname:Funimation ,name:'Funimation' ,url:'https://www.crunchyroll.com/' },
    iqiy: { pathname:Iq ,name:'iQIYI' ,url:'https://www.iq.com/' },

} as const;

export type KeyPlatformList = keyof typeof mapPlatform

