"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <p>주소: 송파구 송파대로 24길 5-13, 303호 (가락동 104-7)</p>
        <p>전화: 02-430-2351 / 010-9573-2351 (문의 365일 24시간 가능)</p>
        <p>이메일: info@example.com</p>
        <p>기관기호: 2-11710-00469 / 고유번호증: 530-80-03437</p>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} 라라재가방문요양센터. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
