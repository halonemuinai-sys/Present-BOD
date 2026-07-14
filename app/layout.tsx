import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bi-Weekly Progress Update",
  description: "Presentasi progres proyek dua mingguan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
