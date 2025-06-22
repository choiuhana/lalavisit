"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-white shadow sticky top-0 z-20">
			<div className="container mx-auto flex items-center justify-between px-4 py-3 relative">
				<Link href="/" className="text-xl font-semibold text-gray-800">
					라라재가 요양센터
				</Link>
				<nav className="hidden md:flex space-x-6 text-gray-700">
					<Link href="/about" className="hover:text-gray-900">
						센터 소개
					</Link>
					<Link href="/find" className="hover:text-gray-900">
						오시는 길
					</Link>
				</nav>
				<button
					onClick={() => setOpen(!open)}
					className="md:hidden text-gray-700 hover:text-gray-900"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={
								open
									? "M6 18L18 6M6 6l12 12"
									: "M4 6h16M4 12h16M4 18h16"
							}
						/>
					</svg>
				</button>

				{open && (
					<nav className="absolute top-full left-0 right-0 z-30 bg-white/90 backdrop-blur-md shadow-md md:hidden">
						<div className="container mx-auto px-4 py-4 flex flex-col space-y-3 text-gray-800">
							<Link href="/" onClick={() => setOpen(false)} className="hover:text-gray-900">
								홈
							</Link>
							<Link href="/about" onClick={() => setOpen(false)} className="hover:text-gray-900">
								센터 소개
							</Link>
							<Link href="/find" onClick={() => setOpen(false)} className="hover:text-gray-900">
								오시는 길
							</Link>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
};

export default Navbar;
