import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seerah Quiz App",
  description:
    "Dive deep into the life and teachings of the Prophet Muhammad ﷺ with our engaging and educational Seerah Quiz! Test your knowledge, learn new insights, and challenge yourself with questions that cover the most important events, lessons, and wisdom from the Prophet's life. Whether you're a student of Islamic history or just curious to learn more, our quizzes offer a fun and interactive way to explore the Seerah. Start your journey today and deepen your understanding of the Prophet's remarkable life story!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
