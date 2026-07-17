# Presentation Deck Developer Guide

Panduan teknis ini menjelaskan arsitektur, konfigurasi slide, sistem routing, serta cara memodifikasi dan menambahkan slide baru pada proyek presentasi interaktif Next.js 16 ini.

---

## 1. Stack Teknologi & Spesifikasi
Presentasi ini dibangun menggunakan teknologi modern untuk performa tinggi dan animasi premium:
*   **Core Framework:** Next.js 16 (App Router)
*   **Styling & Design System:** Tailwind CSS v4 (menggunakan skema warna korporat gelap `#101b3d`, hijau `#1f3a3d`, dan aksen emas `#d99a2b`)
*   **Animations:** Framer Motion (untuk transisi slide, kemunculan bertahap (*stagger*), serta efek hover interaktif)
*   **Icons:** Lucide React
*   **Interactivity:** Pustaka `@tsparticles` (untuk efek partikel jaringan di cover).

---

## 2. Struktur Direktori Proyek
Berikut adalah peta folder utama yang relevan untuk modifikasi presentasi:
```text
├── content/
│   └── slides.ts               <-- Pendaftaran dan urutan slide utama
├── components/
│   └── slides/                 <-- Source code seluruh slide interaktif
│       ├── cover-hero/         <-- Slide 1: Cover dengan animasi partikel & gradasi
│       ├── current-challenges/ <-- Slide 4: Tantangan & sistem silo (Gantt 3-Baris)
│       ├── big-data-pipeline/  <-- Slide 7: Pipa arsitektur data & highlight in-house
│       ├── roadmap-timeline/   <-- Slide 9: Jadwal pengerjaan interaktif (6 & 8 bulan)
│       └── build-vs-buy/       <-- Slide 10: Finansial 3-Tab (SaaS vs Hub, Budget, ROI)
├── lib/
│   └── types.ts                <-- Definisi tipe TypeScript global
```

---

## 3. Konfigurasi & Routing Slide
Daftar seluruh slide diatur dalam file tunggal: [content/slides.ts](file:///d:/Private%20Project/Presentasi%20Bi%20Weekly/content/slides.ts).

### Cara Kerja Routing Slide:
*   Setiap slide didaftarkan sebagai objek di dalam array `slides` dengan format:
    ```typescript
    {
      type: "diagram",
      id: "slide-unique-id",
      Component: SlideComponent,
    }
    ```
*   Urutan slide di layar mengikuti urutan indeks di dalam array `slides` di file ini.
*   Untuk mengubah urutan slide atau menghapus slide (seperti saat menggabungkan Slide 11 ke Slide 10), Anda hanya perlu menyesuaikan array di file ini.

---

## 4. Bedah Fitur Interaktif Utama

### A. Slide 9: Roadmap Timeline (Gantt Chart Interaktif)
Jalur pengerjaan dibagi menjadi dua tab (*In-house Developer* 6 bulan dan *MRAMU* 8 bulan) yang terdefinisi di [roadmap-timeline/data.ts](file:///d:/Private%20Project/Presentasi%20Bi%20Weekly/components/slides/roadmap-timeline/data.ts).
1.  **Grid Kolom Dinamis:**
    Kolom bulan digambar secara dinamis berdasarkan data jumlah bulan aktif:
    ```typescript
    const cols = data.months.length * 2; // 2 kolom per bulan (setengah bulan)
    ```
    Garis vertikal digambar menggunakan gradasi berulang dengan rasio persentase yang disesuaikan otomatis:
    ```typescript
    backgroundImage: `repeating-linear-gradient(to right, #f1f5f9 0, #f1f5f9 1px, transparent 1px, transparent ${monthPercentage}%)`
    ```
2.  **Detail Popup Modal:**
    *   Tiap kotak baris Gantt memiliki properti `description` dan `features`.
    *   Menggunakan state `selectedBar` di `index.tsx`. Ketika kotak diklik, modal muncul dengan animasi *backdrop blur* dan daftar centang sub-fitur.

### B. Slide 10: Financial & ROI (3-Tab Layout)
Menggabungkan perbandingan pasar, anggaran modular (sebelumnya Slide 11), dan kalkulasi pengembalian modal (BEP).
*   **Tab 1 (Market Comparison):** Membandingkan biaya langganan 10 SaaS retail versus sewa server MRA Hub secara berdampingan.
*   **Tab 2 (Dev Budget & Scope):** Menyediakan sub-navigasi internal untuk melihat rincian biaya per modul pengerjaan (Overview, Foundation, Data, Dashboards, QA).
*   **Tab 3 (ROI & Recurring):** Menampilkan rincian biaya tahunan dan kalkulator waktu balik modal (BEP) dalam format kartu bergradasi gelap premium.

### C. Slide 7: Big Data Pipeline (Peta Arsitektur)
*   **Highlight In-House:** Data source **Enterprise Operations Platform** ditandai dengan `isInHouse: true` di [big-data-pipeline/data.ts](file:///d:/Private%20Project/Presentasi%20Bi%20Weekly/components/slides/big-data-pipeline/data.ts).
*   Kartu yang ditandai akan memiliki animasi transisi warna *border* emas-amber berulang dan pijar bayangan (*pulsing ring glow*) di [ItemCard.tsx](file:///d:/Private%20Project/Presentasi%20Bi%20Weekly/components/slides/big-data-pipeline/ItemCard.tsx).

### D. Slide 4: Current Challenges (Sistem Silo & Aliran Data)
*   **Sejajar dengan Grid 3-Baris:** Membagi diagram menjadi baris-baris eksplisit di [FragmentedSystemsPanel.tsx](file:///d:/Private%20Project/Presentasi%20Bi%20Weekly/components/slides/current-challenges/FragmentedSystemsPanel.tsx) sehingga panah mengalir tepat sejajar di tengah-tengah kartu sistem (tidak meleset ke ruang kosong).
*   **Dashed Arrow Flowing:** Garis putus-putus pada panah dianimasikan bergerak maju menggunakan Framer Motion `strokeDashoffset` berulang secara linear di [DashedArrow.tsx](file:///d:/Private%20Project/Presentasi%20Bi%20Weekly/components/slides/current-challenges/DashedArrow.tsx).

---

## 5. Cara Menambahkan Slide Baru

Jika Anda ingin menambahkan slide baru untuk presentasi berikutnya, ikuti 3 langkah berikut:

### Langkah 1: Buat Folder Komponen Baru
Buat folder di `components/slides/nama-slide-baru/` dan siapkan file minimal berikut:
1.  **`data.ts`** (Simpan semua teks/copy di sini):
    ```typescript
    export const slideTitle = "Judul Slide Baru";
    export const slideContent = { ... };
    ```
2.  **`index.tsx`** (Komponen React utama):
    ```tsx
    "use client";
    import { motion } from "framer-motion";
    import { slideTitle } from "./data";

    export default function MyNewSlide() {
      return (
        <div className="h-full w-full flex items-center justify-center bg-white p-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-[#101b3d]"
          >
            {slideTitle}
          </motion.h1>
        </div>
      );
    }
    ```

### Langkah 2: Daftarkan Slide di `content/slides.ts`
Buka file `content/slides.ts`, impor komponen baru Anda, lalu tambahkan ke array `slides` di posisi yang Anda inginkan:
```typescript
import MyNewSlide from "@/components/slides/nama-slide-baru";

export const slides: Slide[] = [
  // ... slide sebelumnya
  {
    type: "diagram",
    id: "my-new-slide-id",
    Component: MyNewSlide,
  },
  // ... slide berikutnya
];
```

### Langkah 3: Validasi Kode
Jalankan perintah pengujian untuk memastikan tidak ada kesalahan impor atau TypeScript yang tidak terpakai:
```bash
npm run lint   # Memastikan standar penulisan kode bersih
npm run build  # Memastikan Next.js berhasil dikompilasi ke statis
```

---

## 6. Praktik Terbaik Penulisan Kode (Best Practices)
1.  **Pemisahan Data & Tampilan:** Selalu pisahkan variabel teks, daftar item, dan ikon ke dalam file `data.ts`. File `index.tsx` hanya bertugas memetakan data tersebut ke elemen JSX. Hal ini memudahkan penerjemahan bahasa atau pembaruan angka/biaya di kemudian hari.
2.  **Gunakan Ukuran Relatif:** Presentasi ini ditampilkan di berbagai layar proyektor/monitor. Gunakan satuan `px` yang fleksibel, flexbox (`flex`), grid, atau padding responsif agar presentasi tidak terpotong pada layar kecil.
3.  **Framer Motion Viewport Trigger:** Gunakan properti `viewport={{ once: true }}` pada Framer Motion agar animasi kemunculan elemen hanya terpicu sekali saat slide pertama kali digeser masuk ke layar.
