"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-10">
        <h3 className="text-lg font-semibold mb-2">라라재가 요양센터</h3>
        <p>주소: 서울특별시 어딘가 1234</p>
        <p>전화: 02-1234-5678</p>
        <p className="mb-4">이메일: info@example.com</p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Lara Homecare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
