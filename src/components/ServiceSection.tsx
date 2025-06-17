"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Service = {
  id: "visitCare" | "visitBath" | "visitNurse" | "dayNight" | "shortStay" | "cognitive" | "welfareDevice";
  label: string;
  description: string;
  image: string;
  details?: string;
  price?: string;
};

const services: Service[] = [
  {
    id: "visitCare",
    label: "방문요양",
    description: "어르신의 일상생활 지원 및 가사 활동을 도와드립니다.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "방문요양은 신체활동 지원, 가사 활동 지원, 정서 지원, 인지활동 지원 등을 제공합니다. 어르신의 건강 상태와 생활환경에 맞춰 개별 맞춤 서비스로 진행됩니다.",
    price: "장기요양 1등급: 1,672,900원/월, 2등급: 1,486,800원/월, 3등급: 1,350,800원/월 (본인부담금 15%)"
  },
  {
    id: "visitBath",
    label: "방문목욕",
    description: "전문 요양사가 방문해 목욕을 안전하고 편안하게 도와드립니다.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "이동식 욕조 또는 가정 내 욕실에서 전문 요양사가 목욕을 도와드립니다. 깨끗하고 위생적인 환경에서 편안한 목욕 서비스를 제공합니다.",
    price: "차량이용: 회당 75,760원, 차량미이용: 회당 60,170원 (본인부담금 15%)"
  },
  {
    id: "visitNurse",
    label: "방문간호",
    description: "간호사·조산사가 방문하여 의료·간호 서비스를 제공합니다.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "전문 간호사가 가정을 방문하여 건강 상태 체크, 투약 관리, 기본 간호, 상처 관리 등의 의료 서비스를 제공합니다.",
    price: "30분 미만: 36,530원, 30분~60분: 46,080원, 60분 이상: 55,640원 (본인부담금 15%)"
  },
  {
    id: "dayNight",
    label: "주·야간보호",
    description: "낮·밤 시간 단위로 시설형 돌봄 서비스를 제공합니다.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "센터에서 낮 시간 또는 저녁 시간 동안 어르신을 돌봐드리며, 다양한 프로그램과 식사, 간식 등을 제공합니다. 송영 서비스도 함께 운영됩니다.",
    price: "1등급: 59,330원/일, 2등급: 55,060원/일, 3등급: 50,770원/일 (본인부담금 15%)"
  },
  {
    id: "shortStay",
    label: "단기보호",
    description: "시설에서 최대 9일까지 임시 돌봄을 이용할 수 있습니다.",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "보호자의 여행, 병원 입원 등의 상황에서 일시적으로 어르신을 돌봐드립니다. 최대 9일까지 이용 가능하며, 식사와 24시간 돌봄 서비스를 제공합니다.",
    price: "1등급: 62,080원/일, 2등급: 57,640원/일, 3등급: 53,150원/일 (본인부담금 15%)"
  },
  {
    id: "cognitive",
    label: "방문인지활동",
    description: "맞춤형 인지훈련·활동으로 인지 기능을 향상시킵니다.",
    image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "치매 예방 및 인지기능 유지를 위한 다양한 인지활동 프로그램을 제공합니다. 기억력 향상, 일상생활 능력 유지를 위한 맞춤형 서비스입니다.",
    price: "회당 34,270원 (본인부담금 15%, 월 최대 12회)"
  },
  {
    id: "welfareDevice",
    label: "복지용구 제공",
    description: "보행기·전동침대 등 보조기구를 대여·지원합니다.",
    image: "https://images.unsplash.com/photo-1585142254088-4753504c4b86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    details: "전동침대, 휠체어, 보행기, 목욕의자 등 일상생활에 필요한 복지용구를 대여하거나 구입할 수 있도록 지원합니다.",
    price: "연간 한도액 160만원 내 품목별 차등 지원 (본인부담금 15%)"
  },
];

const ServiceSection = ({ setShowContact }: { setShowContact: (show: boolean) => void }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 카드 클릭 시 좌표를 기반으로 확장 애니메이션 구현
  const handleCardClick = (service: Service, index: number) => {
    const card = cardRefs.current[index];

    if (card) {
      const rect = card.getBoundingClientRect();

      // 카드의 위치로부터 모달 시작 스타일 설정
      setModalStyle({
        position: 'fixed',
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: 'scale(1)',
        opacity: 1,
        zIndex: 50,
        borderRadius: '0.75rem',
        overflow: 'hidden'
      });

      setSelectedService(service);

      // 약간의 지연 후 모달 표시 (애니메이션을 위한 준비 시간)
      setTimeout(() => {
        setShowModal(true);

        // 모달이 표시된 후 위치와 크기 조정 (확장 애니메이션)
        setTimeout(() => {
          setModalStyle({
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: 'min(90%, 900px)',
            maxHeight: '85vh',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
            zIndex: 50,
            borderRadius: '0.75rem',
            overflow: 'hidden' // hidden으로 변경하여 스크롤바는 내부에서��� 처리
          });
        }, 10);
      }, 50);
    }
  };

  const handleCloseModal = () => {
    // 닫기 애니메이션: 원래 카드 위치로 돌아가기
    const index = services.findIndex(s => s.id === selectedService?.id);
    const card = cardRefs.current[index];

    if (card && showModal) {
      const rect = card.getBoundingClientRect();

      setModalStyle({
        position: 'fixed',
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: 'scale(1)',
        opacity: 1,
        zIndex: 50,
        borderRadius: '0.75rem',
        overflow: 'hidden',
        transition: 'all 0.4s ease-out'
      });

      // 아웃 애니메이션 후 모달 닫기
      setTimeout(() => {
        setShowModal(false);
        // 모달이 완전히 닫힌 후 상태 초기화
        setTimeout(() => {
          setSelectedService(null);
        }, 300);
      }, 300);
    } else {
      // 카드 참조를 찾지 못한 경우 즉시 닫기
      setShowModal(false);
      setTimeout(() => {
        setSelectedService(null);
      }, 300);
    }
  };

  const handleContactClick = () => {
    handleCloseModal();
    setTimeout(() => {
      setShowContact(true);
    }, 600);
  };

  // 모달 외부 클릭 방지
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // ESC 키를 눌렀을 때 모달 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showModal]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* 서비스 소개 타이틀 */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">맞춤형 요양 서비스</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">다양한 요양 서비스를 통해 어르신들의 건강하고 편안한 생활을 지원합니다.</p>
      </div>

      {/* 서비스 카드 (반응형 그리드) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={el => cardRefs.current[index] = el}
            onClick={() => handleCardClick(service, index)}
            className="rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={service.image}
                alt={service.label}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white">{service.label}</h3>
              </div>
            </div>
            <div className="p-5 bg-white">
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-end">
                <button
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(service, index);
                  }}
                >
                  자세히 보기
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 서비스 상세 모달 - 투명도 높이고 자연스럽게 확장 */}
      {selectedService && (
        <div
          className={`fixed inset-0 z-40 ${showModal ? 'pointer-events-auto' : 'pointer-events-none'}`}
          onClick={handleCloseModal}
        >
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${
              showModal ? 'bg-opacity-10 backdrop-blur-[1px]' : 'bg-opacity-0 backdrop-blur-0'
            }`}
          ></div>

          <div
            ref={modalRef}
            style={{
              ...modalStyle,
              transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            className="bg-white rounded-xl shadow-2xl flex flex-col"
            onClick={handleModalContentClick}
          >
            {showModal && (
              <>
                {/* 헤더 부분 - 스크롤에 영향받지 않도록 고정 */}
                <div className="relative h-72 md:h-80 flex-shrink-0">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                  <button
                    className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-2 transition-all"
                    onClick={handleCloseModal}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h2 className="text-3xl font-bold">{selectedService.label}</h2>
                    <p className="text-lg text-white/90 mt-2">{selectedService.description}</p>
                  </div>
                </div>

                {/* 스크롤 가능한 내용 부분 */}
                <div className="overflow-y-auto p-6 md:p-8" style={{ maxHeight: 'calc(85vh - 20rem)' }}>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">서비스 내용</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedService.details}</p>
                  </div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">이용 요금</h3>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">{selectedService.price}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">※ 요금은 정부 정책에 따라 변동될 수 있습니다.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">장기요양보험 적용</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">전문 인력 방문</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">맞춤형 서비스</span>
                  </div>
                </div>

                {/* 하단 버튼 영역 - 스크롤에 영향받지 않도록 고정 */}
                <div className="border-t p-6 mt-auto flex-shrink-0">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/find"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium text-center flex-1 sm:flex-initial"
                    >
                      찾아가기
                    </a>
                    <button
                      onClick={handleContactClick}
                      className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition shadow-md font-medium flex-1 sm:flex-initial"
                    >
                      문의하기
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CTA 섹션 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">지금 바로 문의하세요</h3>
            <p className="text-gray-600 max-w-md">어르신을 위한 최적의 요양 서비스를 제공해 드립니다.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/find"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium text-center"
            >
              찾아가기
            </a>
            <button
              onClick={() => setShowContact(true)}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition shadow-md font-medium"
            >
              문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
