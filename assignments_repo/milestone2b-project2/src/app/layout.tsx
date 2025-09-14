import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";

const inter = Inter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abbas Asad | Turning Ideas into Reality",
  description: "Explore my portfolio showcasing expertise in web development, modern frameworks, and creative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-slate-900 custom-scrollbar`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}