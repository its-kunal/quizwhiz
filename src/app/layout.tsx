import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuizWhiz",
  description:
    "Test your knowledge and learn something new with engaging quizzes on various topics.",
  keywords: [
    "quiz",
    "quiz app",
    "quiz game",
    "knowledge",
    "learning",
    "education",
    "fun",
    "trivia",
    "test your knowledge",
    "engaging quizzes",
    "various topics",
    "interactive quizzes",
    "knowledge testing",
    "educational quizzes",
    "fun quizzes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
