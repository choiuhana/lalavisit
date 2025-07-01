"use client";

import { useState, useEffect } from "react";

interface ContactModalProps {
  showContact: boolean;
  setShowContact: (show: boolean) => void;
	context?: string;
}

const ContactModal = ({ showContact, setShowContact, context = "" }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (showContact) {
      setFormData(prev => ({ ...prev, message: context }));
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
    }
  }, [showContact, context]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 폼 데이터 처리 로직을 구현할 수 있습니다
    console.log("제출된 데이터:", formData);

    // 폼 초기화 및 모달 닫기
    setFormData({ name: "", phone: "", email: "", message: "" });
    setShowContact(false);
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setShowContact(false);
    }, 300);
  };

  if (!showContact) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-50"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(1px)'
      }}
      onClick={closeModal}
    >
      <div
        className={`bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-4 transform transition-all duration-500 ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 py-6 border-b flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <h3 className="text-2xl font-semibold text-gray-800">문의하기</h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-8">
          <p className="text-gray-600 mb-8 text-lg">라라재가요양센터에 궁금한 점이 있으신가요? 아래 양식을 작성하시면 빠른 시일 내에 답변 드리겠습니다.</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">이름</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="홍길동"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">연락처</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="010-0000-0000"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">문의내용</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-40 resize-none"
                placeholder="문의하실 내용을 자세히 적어주세요."
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
              <button
                type="button"
                className="px-6 py-3 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-50 font-medium"
                onClick={closeModal}
              >
                닫기
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium"
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
