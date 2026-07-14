import type { Slide } from "@/lib/types";
import EnterpriseEcosystemSlide from "@/components/slides/enterprise-ecosystem";
import CoverHeroSlide from "@/components/slides/cover-hero";
import BigDataPipelineSlide from "@/components/slides/big-data-pipeline";
import DepartmentPainPointsSlide from "@/components/slides/department-pain-points";
import BuildVsBuySlide from "@/components/slides/build-vs-buy";

// Edit this array to build your own deck.
// - "image" slides are the main content: drop screenshots into public/slides/
//   and point `src` at "/slides/your-file.png".
// - Reorder freely; each slide's `id` keeps animations stable across edits.
export const slides: Slide[] = [
  {
    type: "diagram",
    id: "cover",
    Component: CoverHeroSlide,
  },
  {
    type: "diagram",
    id: "enterprise-ecosystem",
    Component: EnterpriseEcosystemSlide,
  },
  {
    type: "diagram",
    id: "big-data-pipeline",
    Component: BigDataPipelineSlide,
  },
  {
    type: "diagram",
    id: "department-pain-points",
    Component: DepartmentPainPointsSlide,
  },
  {
    type: "diagram",
    id: "build-vs-buy",
    Component: BuildVsBuySlide,
  },
  {
    type: "section",
    id: "section-project-a",
    label: "Project",
    heading: "Nama Project A",
  },
  {
    type: "image",
    id: "example-1",
    src: "/slides/example-1.svg",
    alt: "Contoh screenshot progres Project A",
    title: "Nama Project A",
    caption: "Ganti gambar ini dengan screenshot progres Anda di public/slides/",
  },
  {
    type: "image",
    id: "example-2",
    src: "/slides/example-2.svg",
    alt: "Contoh screenshot progres Project B",
    title: "Nama Project B",
    caption: "Tambahkan slide image baru di content/slides.ts sesuai kebutuhan",
  },
  {
    type: "bullets",
    id: "next-steps",
    heading: "Next Steps",
    items: [
      "Tambahkan poin rencana kerja berikutnya di sini",
      "Edit array di content/slides.ts",
      "Tambah slide baru dengan menyalin salah satu tipe di atas",
    ],
  },
  {
    type: "closing",
    id: "closing",
    heading: "Terima Kasih",
    subheading: "Pertanyaan & Diskusi",
  },
];
