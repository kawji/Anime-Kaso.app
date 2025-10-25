import { KeyPlatformList } from "./mapPlatformList"


type SubtitleList = 'ซับไทย' | 'พากย์ไทย' |'พากย์ญี่ปุ่น'

export type AnimeObj = {
    season:string ;
    subtitleList: SubtitleList[] ;
    resume:string ;
    platformList:KeyPlatformList[];
}

export type TypeDataAnime = Record<number,AnimeObj> 


// For adding anime information as an example
export const AnimeData:TypeDataAnime = {
    52480:{ 
        season:'Season 2' ,
        subtitleList:[ 'ซับไทย','พากย์ไทย','พากย์ญี่ปุ่น' ] ,
        resume:'เรื่องย่อ: คิมิสึกะ คิมิฮิโกะ หนุ่มวัย 14 ปี ที่มักจะพัวพันกับคดีต่างๆ จนเกิดคดีปล้นเครื่องบินได้พบกับเซียสต้า หลังจากถูกชักชวน ตัวเขาได้เป็นผู้ช่วยของนักสืบสาว เซียสต้า ออกเดินทางกับเธอร่วม 3 ปีสู้กับองค์กรลับ SPES หลังจากเซียสต้าตายไปร่วม 1 ปีและกลับมาใช้ชีวิตเป็นนักเรียนมัธยมปลาย ตอนอายุ 18 ปี เขาได้พบ นัตสึนางะ นางิสะ ที่ไหว้วานให้ตามหาคนหนึ่งให้ ซึ่งเป็นเหตุให้เขาได้มีโอกาสคุยกับเซียสต้าอีกครั้ง' ,
        platformList:['netflix' ,'youtube' ,'iqiy'] ,
    } ,
    59985: { 
        season:'Season 4' ,
        subtitleList:[ 'ซับไทย','พากย์ไทย' ] ,
        resume:'เรื่องย่อ: เป็นเรื่องราวของ อิจิคาวะ เคียวทาโร่ เด็กหนุ่มที่มักจะคิดว่าตัวเองเป็นตัวเอกในนิยายระทึกขวัญ และมีแผนที่จะทำลายความสงบสุขของโรงเรียน รวมถึงไอดอลของชั้นอย่าง ยามาดะ อันนะ แต่สุดท้ายเขากลับพบว่าอันนะเองก็มีความแปลกประหลาดในแบบของเธอเช่นกัน' ,
        platformList:['netflix' ,'youtube'] ,
    }
} as const;


