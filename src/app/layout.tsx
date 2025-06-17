import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
	title: "라라재가 요양센터",
	description: "집에서 편안하게 받는 1:1 요양 서비스 – 라라재가 요양센터",
};

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) {
        return (
                <html lang="ko">
                        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
                                <Navbar />
                                {children}
                                <Footer />
                        </body>
                </html>
        );
}
