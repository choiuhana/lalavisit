"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white shadow-sm py-4 relative">
			<div className="container mx-auto px-4 flex items-center justify-between">
				{/* 로고와 센터명 함께 배치 */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center">
						<Image src="/logo.svg" alt="라라재가방문요양센터 로고" width={50} height={50} className="mr-3" />
						<h1 className="text-xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">라라재가 방문요양센터</h1>
					</Link>
				</div>

				{/* 데스크탑 메뉴 */}
				<nav className="hidden md:flex items-center space-x-6">
					<Link href="/about" className="text-gray-700 hover:text-blue-600">
						센터 소개
					</Link>

					<Link href="/find" className="text-gray-700 hover:text-blue-600">
						오시는 길
					</Link>
				</nav>

				{/* 모바일 햄버거 메뉴 아이콘 */}
				<button className="block md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					{mobileMenuOpen ? (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					)}
				</button>
			</div>

			{/* 모바일 네비게이션 메뉴 */}
			<nav
				className={`absolute top-full left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
					mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
				}`}
			>
				<div className="container mx-auto px-4 py-2">
					<ul className="space-y-2">
						<li>
							<Link
								href="/about"
								className="block py-2 px-4 hover:bg-gray-100 rounded-md"
								onClick={() => setMobileMenuOpen(false)}
							>
								센터 소개
							</Link>
						</li>

						<li>
							<Link
								href="/find"
								className="block py-2 px-4 hover:bg-gray-100 rounded-md"
								onClick={() => setMobileMenuOpen(false)}
							>
								오시는 길
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
