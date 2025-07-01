"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceOptions from "./ServiceOptions";

type UserType = "client" | "caregiver" | null;
type ServiceType = "visit" | "family" | "live-in" | null;

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
          <button
            onClick={handleCenterInfo}
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-blue-200 text-gray-800"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-semibold mb-2">센터에 대해 알려주세요</h3>
            <p className="text-sm">센터 소개와 위치를 확인하세요</p>
          </button>

          <button
            onClick={() => setUserType("client")}
            className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-green-200 text-gray-800"
          >
            <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-lg font-semibold mb-2">요양보호사가 필요합니다</h3>
            <p className="text-sm">어르신을 위한 요양 서비스 신청</p>
          </button>

          <button
            onClick={() => setUserType("caregiver")}
            className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-purple-200 text-gray-800"
          >
            <div className="text-4xl mb-4">👩‍⚕️</div>
            <h3 className="text-lg font-semibold mb-2">요양보호사 입니다</h3>
            <p className="text-sm">요양보호사 지원 및 문의</p>
          </button>
        </div>
      ) : (
        // 서비스 유형 선택 또는 서비스 상세 정보 표시
        <div className="bg-gray-100 rounded-xl shadow-lg p-6 border border-gray-300">
          <div className="flex items-center justify-center mb-8">
            <button
              onClick={resetSelections}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors border border-blue-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              처음으로 돌아가기
            </button>
            <span className="mx-3 text-gray-500">|</span>
            <div className="text-sm rounded-full bg-blue-100 px-4 py-2 text-blue-800 font-medium border border-blue-200">
              {userType === "client" ? "요양보호사 찾기" : "요양보호사 지원"}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5">
            <ServiceOptions
              userType={userType}
              serviceType={serviceType}
              setServiceType={setServiceType}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserChoiceSection;
