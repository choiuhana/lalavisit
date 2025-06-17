"use client";

import { useState } from "react";
import Image from "next/image";
import TypewriterText from "./TypewriterText";
import UserChoiceSection from "./UserChoiceSection";

const HeroSection = () => {
  const [showChoices, setShowChoices] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="배경 이미지"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-shadow">
            <TypewriterText
              text="어서오세요, 라라재가 요양센터입니다"
              repeat={false}
              typingSpeed={80}
            />
          </h1>
          <p className="text-lg sm:text-2xl mb-12 text-shadow-sm opacity-90">
            {showChoices ? (
              "무엇을 도와드릴까요?"
            ) : (
              "집에서 편안하게 받는 1:1 맞춤형 요양 서비스"
            )}
          </p>

          {!showChoices && (
            <button
              onClick={() => setShowChoices(true)}
              className="px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition shadow-md font-medium text-lg mx-auto"
            >
              시작하기
            </button>
          )}

          {showChoices && <UserChoiceSection />}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
