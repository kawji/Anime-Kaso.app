import { KeyPlatformList } from "./mapPlatformList"

type SubtitleList = 'ซับไทย' | 'พากย์ไทย' |'พากย์ญี่ปุ่น'


type AnimeObj = {
    season:number ;
    subtitleList: SubtitleList[] ;
    resume:string ;
    PlatformList:KeyPlatformList[];
}

export type TypeDataAnime = Record<number,AnimeObj> 



export const animeData:TypeDataAnime = {
    52480:{ 
        season:2 ,
        subtitleList:[ 'ซับไทย','พากย์ไทย','พากย์ญี่ปุ่น' ] ,
        resume:'เรื่องย่อ: คิมิสึกะ คิมิฮิโกะ หนุ่มวัย 14 ปี ที่มักจะพัวพันกับคดีต่างๆ จนเกิดคดีปล้นเครื่องบินได้พบกับเซียสต้า หลังจากถูกชักชวน ตัวเขาได้เป็นผู้ช่วยของนักสืบสาว เซียสต้า ออกเดินทางกับเธอร่วม 3 ปีสู้กับองค์กรลับ SPES หลังจากเซียสต้าตายไปร่วม 1 ปีและกลับมาใช้ชีวิตเป็นนักเรียนมัธยมปลาย ตอนอายุ 18 ปี เขาได้พบ นัตสึนางะ นางิสะ ที่ไหว้วานให้ตามหาคนหนึ่งให้ ซึ่งเป็นเหตุให้เขาได้มีโอกาสคุยกับเซียสต้าอีกครั้ง' ,
        PlatformList:['netflix' ,'youtube'] ,
    } 


} as const;


