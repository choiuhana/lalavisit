"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceOptions from "./ServiceOptions";
import { Button } from "@/components/ui/Button";

type UserType = "client" | "caregiver" | null;
type ServiceType = "visit" | "family" | null;

const UserChoiceSection = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const router = useRouter();

  const handleCenterInfo = () => {
    router.push("/about");
  };

  const resetSelections = () => {
    setUserType(null);
    setServiceType(null);
  };

  return (
    <div className="mt-2 space-y-6 transition-all">
      {!userType ? (
        // 초기 사용자 유형 선택
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button
            onClick={handleCenterInfo}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-white border-opacity-30 text-gray-900"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold mb-2">센터에 대해 알려주세요</h3>
            <p className="text-sm opacity-80">센터 소개와 위치를 확인하세요</p>
          </Button>
          
          <Button
            onClick={() => setUserType("client")}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-white border-opacity-30 text-gray-900"
          >
            <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-lg font-semibold mb-2">요양보호사가 필요합니다</h3>
            <p className="text-sm opacity-80">어르신을 위한 요양 서비스 신청</p>
          </Button>
          
          <Button
            onClick={() => setUserType("caregiver")}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-white border-opacity-30 text-gray-900"
          >
            <div className="text-4xl mb-4">👩‍⚕️</div>
            <h3 className="text-lg font-semibold mb-2">요양보호사 입니다</h3>
            <p className="text-sm opacity-80">요양보호사 지원 및 문의</p>
          </Button>
        </div>
      ) : (
        // 서비스 유형 선택 또는 서비스 상세 정보 표시
        <>
          <div className="flex items-center justify-center mb-8">
            <Button
              onClick={resetSelections}
              className="flex items-center text-white hover:underline mr-2"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              처음으로 돌아가기
            </Button>
            <span className="mx-2 opacity-60">|</span>
            <div className="text-sm rounded-full bg-white bg-opacity-20 px-3 py-1 text-gray-900">
              {userType === "client" ? "요양보호사 찾기" : "요양보호사 지원"}
            </div>
          </div>

          <ServiceOptions 
            userType={userType} 
            serviceType={serviceType} 
            setServiceType={setServiceType} 
          />
        </>
      )}
    </div>
  );
};

export default UserChoiceSection;
