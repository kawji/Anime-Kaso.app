# Anime - Kaso.app

> [!CAUTION]
> **คำเตือน (Warning):** โปรเจกต์นี้เป็นโปรเจกต์เก่าที่ปัจจุบัน**ไม่ได้รับการสนับสนุนหรือดูแลต่อแล้ว (Deprecated)** เนื่องจากระบบดึงข้อมูล (API) มีการอัปเดตความปลอดภัยใหม่ ส่งผลให้ระบบไม่สามารถดึงข้อมูลอนิเมะมาแสดงผลได้ตามปกติและอาจเกิดข้อผิดพลาด (Errors) ในการทำงาน

โปรเจกต์ **Anime - Kaso.app** คือเว็บไซต์ที่พัฒนาเพื่อแสดงข้อมูลอนิเมะ (Anime Information) โดยใช้ **[Jikan API](https://jikan.moe)** ในการดึงข้อมูลจาก **MyAnimeList** และเสริมด้วย **Custom Platform Info** เช่น Netflix, iQIYI, Bilibili, YouTube พร้อมข้อมูล **ซับไทย/พากย์ไทย**

---

## 🚀 Tech Stack

- **[Next.js](https://nextjs.org/)** + **TypeScript**
- **TailwindCSS** สำหรับ UI Design
- **TanStack Query (React Query)** สำหรับ Data Fetching & Caching
- **Axios** ใช้เรียก API
- สามารถใช้ได้ทั้ง **Bun** และ **npm** Package Manager
- (Planning) **Database + Prisma ORM** สำหรับจัดการข้อมูล Custom เพิ่มเติมในอนาคต
- ไลบรารี่อื่นๆ ตาม Feature ที่จะเพิ่มเติม

---

## 📦 การติดตั้งและการรัน (Installation & Run)

Clone โปรเจกต์นี้จาก GitHub:

```bash
git clone https://github.com/your-username/anime-kaso.com.git
cd anime-kaso
```
