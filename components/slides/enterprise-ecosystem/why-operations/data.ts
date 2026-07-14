import {
  CheckCircle2,
  ClipboardList,
  Clock,
  DollarSign,
  FileBarChart,
  FileCheck2,
  FileText,
  Lock,
  Network,
  Puzzle,
  RefreshCw,
  Settings,
  ShieldAlert,
  TrendingUp,
  Wallet,
} from "lucide-react";
import type { WhyColumnData } from "./types";

export const whyTitle = "Mengapa MRA Group membutuhkan Enterprise Operations Platform terintegrasi";

export const whyColumns: WhyColumnData[] = [
  {
    number: "01",
    color: "green",
    question: "Apa dampak bisnisnya?",
    icon: TrendingUp,
    answers: [
      { icon: Clock, text: "Proses manual & terpisah menyebabkan pekerjaan lebih lambat" },
      { icon: FileText, text: "Approval berlapis melalui email/Excel memperlambat keputusan" },
      { icon: Settings, text: "Data tersebar di banyak tempat, visibilitas rendah" },
      { icon: RefreshCw, text: "Karyawan fokus pada administrasi, bukan aktivitas bernilai" },
    ],
    summary: "Dampak akhirnya: produktivitas rendah & keputusan terlambat",
  },
  {
    number: "02",
    color: "blue",
    question: "Berapa biaya yang hilang?",
    icon: Wallet,
    answers: [
      { icon: RefreshCw, text: "Budget leakage 2–5% dari total budget", stat: "Rp 600M+ / tahun" },
      { icon: DollarSign, text: "Kontrak terlambat berisiko kehilangan nilai", stat: "Rp 2,5M+ / tahun" },
      { icon: ClipboardList, text: "Duplikasi pekerjaan & proses manual", stat: "Rp 300M+ / tahun" },
      { icon: Lock, text: "Aset tidak termonitor & berisiko hilang", stat: "Rp 300M+ / tahun" },
    ],
    summary: "Estimasi potensi kerugian mencapai miliaran rupiah per tahun",
  },
  {
    number: "03",
    color: "purple",
    question: "Apa risiko perusahaan?",
    icon: ShieldAlert,
    answers: [
      { icon: FileText, text: "Risiko hukum akibat kontrak kadaluarsa atau dokumen tidak terkelola" },
      { icon: FileCheck2, text: "Risiko kepatuhan & audit (denda, temuan, sanksi)" },
      { icon: DollarSign, text: "Risiko finansial akibat pemborosan & budget tidak terkendali" },
      { icon: FileText, text: "Risiko reputasi karena proses tidak transparan dan tidak akuntabel" },
    ],
    summary: "Risiko ini dapat menimbulkan kerugian finansial & reputasi",
  },
  {
    number: "04",
    color: "orange",
    question: "Kenapa ERP yang sudah dibeli belum cukup?",
    icon: Puzzle,
    answers: [
      { icon: FileBarChart, text: "NetSuite kuat sebagai System of Record untuk Finance, Inventory, Procurement" },
      {
        icon: Network,
        text: "Namun proses operasional lintas departemen (GA, Legal, Compliance, Marketing) memiliki karakteristik berbeda",
      },
      { icon: Settings, text: "Membutuhkan workflow fleksibel, approval dinamis, dokumen & kolaborasi" },
      { icon: Network, text: "ERP tidak didesain untuk menangani seluruh proses operasional non-finansial secara optimal" },
    ],
    summary: "ERP adalah fondasi, bukan solusi untuk semua kebutuhan",
  },
  {
    number: "05",
    color: "teal",
    question: "Kenapa perlu platform tambahan?",
    icon: Network,
    answers: [
      { icon: Network, text: "Menghubungkan proses, orang, dokumen & data dalam satu platform" },
      { icon: CheckCircle2, text: "Mempercepat workflow & approval secara terstruktur" },
      { icon: Clock, text: "Memberikan visibilitas real-time untuk pengambilan keputusan" },
      { icon: RefreshCw, text: "Mengurangi risiko, biaya tersembunyi, dan duplikasi pekerjaan" },
      { icon: Network, text: "Menjadi jembatan antara operasional dan data untuk mendukung strategi bisnis" },
    ],
    summary: "Platform tambahan melengkapi ERP dan mengakselerasi bisnis",
  },
];
