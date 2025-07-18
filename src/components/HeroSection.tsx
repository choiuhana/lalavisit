"use client";

import Image from "next/image";
import TypewriterText from "./TypewriterText";
import UserChoiceSection from "./UserChoiceSection";

const HeroSection = () => {
	return (
		<div className="relative overflow-hidden bg-gradient-to-r from-[transparent] to-white text-gray-800 flex flex-1 flex-col items-center justify-center">
			<div className="absolute inset-0 z-0 opacity-20">
				<Image
					src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
					alt="배경 이미지"
					fill
					sizes="100vw"
					style={{ objectFit: "cover" }}
					priority
				/>
			</div>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
						<TypewriterText text="무엇을 도와드릴까요?" repeat={false} typingSpeed={80} />
					</h1>
					<UserChoiceSection />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
