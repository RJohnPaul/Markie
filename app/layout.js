import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Markie",
  description: "A simple markdown editor made with Next.js and Tailwindcss.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Link rel="icon" type="image/ico" href="/favicon.ico" />
      <body className={inter.className}>{children}</body>
      <Toaster />
    </html>
  );
}
