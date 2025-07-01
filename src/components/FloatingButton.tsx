"use client";

import { useState } from "react";
import Link from "next/link";

const FloatingButton = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
			{/* 확장된 버튼 메뉴 */}
			{isExpanded && (
				<div className="flex flex-col gap-3 mb-3 animate-fadeIn">
					<Link
						href="tel:02-430-2351"
						className="bg-blue-500 text-white rounded-full p-3 shadow-lg flex items-center"
					>
						<span className="mr-2 text-sm font-medium">전화하기</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
						</svg>
					</Link>

					<Link
						href="/find"
						className="bg-green-500 text-white rounded-full p-3 shadow-lg flex items-center"
					>
						<span className="mr-2 text-sm font-medium">오시는 길</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
					</Link>
				</div>
			)}

			{/* 메인 버튼 */}
			<button
				onClick={toggleExpand}
				className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all ${
					isExpanded ? "bg-gray-700" : "bg-blue-600"
				}`}
			>
				{isExpanded ? (
					<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				) : (
					<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
					</svg>
				)}
			</button>
		</div>
	);
};

export default FloatingButton;

