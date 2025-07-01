import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingButton from "@/components/FloatingButton";

export const metadata: Metadata = {
	title: "라라재가방문요양센터",
	description: "어르신의 행복한 일상을 위한 맞춤형 요양 서비스",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body className="flex flex-col min-h-screen">
				<Header />
				<main className="flex flex-1">{children}</main>
				<Footer />
				<FloatingButton />
			</body>
		</html>
	);
}
