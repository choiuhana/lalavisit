export const metadata = {
  title: "센터 위치 | 라라재가 요양센터",
};

export default function FindPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">오시는 길</h1>
      <div className="mb-6">
        <iframe
          src="https://maps.google.com/maps?q=seoul&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 border-0"
          loading="lazy"
        ></iframe>
      </div>
      <p className="mb-2">주소: 서울특별시 어딘가 1234</p>
      <p className="mb-2">전화: 02-1234-5678</p>
      <p className="mb-8">운영시간: 평일 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
      <a href="/" className="text-blue-600 hover:underline">첫 화면으로 돌아가기</a>
    </div>
  );
}

