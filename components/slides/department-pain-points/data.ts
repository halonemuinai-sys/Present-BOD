import {
  Archive,
  Bell,
  Clock,
  Eye,
  FileSpreadsheet,
  FileText,
  Folder,
  Home,
  Lightbulb,
  Mail,
  Megaphone,
  Scale,
  Shield,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import type { Department, HighlightCardData, InsightData } from "./types";

export const highlightCards: HighlightCardData[] = [
  { icon: Clock, color: "green", title: "Lambat & Tidak Efisien", text: "Proses manual memakan waktu" },
  { icon: Shield, color: "blue", title: "Risiko Tinggi", text: "Kepatuhan & hukum terancam" },
  { icon: FileText, color: "purple", title: "Data Terpisah", text: "Sulit dilacak & tidak akurat" },
  { icon: TrendingUp, color: "orange", title: "Biaya Tidak Terkendali", text: "Duplikasi & visibilitas anggaran" },
];

export const departments: Department[] = [
  {
    number: "01",
    color: "green",
    icon: Home,
    deptLabel: "General Affairs",
    title: "Aset & Perawatan Manual",
    painPoints: [
      "Pencatatan aset masih by Excel",
      "Sulit monitoring & reminder sewa/kontrak by system",
      "Tidak ada integrasi antar tim",
    ],
    examples: [
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: FileText, label: "Log Manual" },
    ],
    remark: "Adjust Development",
  },
  {
    number: "02",
    color: "blue",
    icon: Scale,
    deptLabel: "Legal",
    title: "Manajemen Dokumen Tidak Terpusat",
    painPoints: [
      "Penyimpanan tidak terpusat",
      "Versi dokumen tidak terkontrol",
      "Pencarian dokumen memakan waktu",
    ],
    examples: [
      { icon: Folder, label: "Folder Lokal" },
      { icon: Archive, label: "Lemari Arsip" },
    ],
    remark: "Progress Development",
  },
  {
    number: "03",
    color: "purple",
    icon: ShieldCheck,
    deptLabel: "Compliance",
    title: "Kepatuhan Reaktif",
    painPoints: [
      "Pemantauan manual & tidak real-time",
      "Risiko denda & sanksi",
      "Tidak ada notifikasi & reminder",
    ],
    examples: [
      { icon: Eye, label: "Pemantauan Manual" },
      { icon: Bell, label: "Reaktif" },
    ],
    remark: "Progress Development",
  },
  {
    number: "04",
    color: "orange",
    icon: Megaphone,
    deptLabel: "Marketing",
    title: "Visibilitas Anggaran Terbatas",
    painPoints: [
      "Tidak ada sistem untuk request plan, budget & realisasi — semua by email & Excel",
      "Dokumentasi realisasi hanya by DocHub",
      "Alur approval tidak transparan",
    ],
    examples: [
      { icon: Mail, label: "Email" },
      { icon: FileSpreadsheet, label: "Excel" },
      { icon: FileText, label: "DocHub" },
    ],
    remark: "Progress Research",
    modalId: "marketing-platform",
  },
];

export const insights: InsightData[] = [
  {
    icon: Lightbulb,
    title: "Dampak ke Bisnis",
    text: "Proses lambat, risiko meningkat, keputusan sulit diambil karena data tidak akurat dan tidak real-time.",
  },
  {
    icon: Target,
    title: "Solusi yang Dibutuhkan",
    text: "Platform terintegrasi untuk menyatukan proses, data, dan visibilitas.",
  },
];
