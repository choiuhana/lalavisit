"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  repeatDelay?: number; // 반복 전 대기 시간 (밀리초)
  typingSpeed?: number; // 타이핑 속도 (밀리초)
  repeat?: boolean; // 반복 여부
}

const TypewriterText = ({
  text,
  repeatDelay = 3000,
  typingSpeed = 100,
  repeat = false
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      // 완료 후 대기
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (repeat) setIsDeleting(true);
      }, repeatDelay);
    } else if (isDeleting) {
      // 지우기 모드
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex(0);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
      }, typingSpeed / 2);
    } else {
      // 타이핑 모드
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, typingSpeed);
      } else if (repeat) {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, isPaused, repeat, repeatDelay, text, typingSpeed]);

  // 텍스트 크기는 부모 요소에서 상속받기 때문에 별도 수정 필요 없음
  // 필요시 아래처럼 클래스를 추가할 수 있습니다
  return (
    <span className="font-bold inline-block relative">
      {displayText}
      <span className={`cursor ${true ? 'animate-blink' : 'opacity-0'}`}></span>
    </span>
  );
};

export default TypewriterText;
