import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"
export const metadata: Metadata = {
  title: "Carlos Calderon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative  ">
      <div className="relative z-10">
        <Navbar />
      </div>
        {children}
      </body>
    </html>
  );
}
