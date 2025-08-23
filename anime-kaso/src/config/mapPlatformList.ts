import Netflix from "@/components/ui/icons/netflix";
import YouTube from "@/components/ui/icons/youTube";
import AmazonPrimeVideo from "@/components/ui/icons/amazonPrimeVideo";
import Bilibili from "@/components/ui/icons/bilibili";
import Crunchyroll from "@/components/ui/icons/crunchyroll";
import Funimation from "@/components/ui/icons/funimation";
import Iq from "@/components/ui/icons/iq";
import { JSX } from "react";


export type ObjPlatform = {
    pathname: React.ComponentType;
    name: string;
}

export type recordPlatform = Record<string,ObjPlatform>

export const mapPlatform:recordPlatform = {
    netflix: { pathname: Netflix ,name:'Netflix' },
    youtube: { pathname:YouTube ,name:'YouTube' },
    amazon: { pathname:AmazonPrimeVideo ,name:'Amazon Prime Video' },
    bilibili: { pathname:Bilibili ,name:'Bilibili' },
    crunchyroll: { pathname:Crunchyroll ,name:'Crunchyroll' },
    funimation: { pathname:Funimation ,name:'Funimation' },
    iqiy: { pathname:Iq ,name:'iQIYI' },

} as const;

export type KeyPlatformList = keyof typeof mapPlatform

