export const metadata = {
  title: "센터 소개 | 라라재가 요양센터",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">센터 소개</h1>
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?auto=format&fit=crop&w=1200&q=80"
          alt="센터 이미지"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="mb-4">
          라라재가 요양센터는 어르신의 행복한 일상을 위해 최선을 다합니다. 전문 요양보호사가 맞춤형 서비스를 제공하며,
          가족처럼 따뜻한 돌봄을 약속드립니다.
        </p>
        <p className="mb-4">
          주요 서비스로는 방문요양, 방문목욕, 방문간호 등이 있으며, 신체·정서·인지 활동을 종합적으로 지원합니다.
        </p>
        <p className="mb-8">항상 열린 마음으로 상담해 드리니 궁금한 점이 있으면 언제든지 문의해 주세요.</p>
      </div>
      <a href="/" className="text-blue-600 hover:underline">첫 화면으로 돌아가기</a>
    </div>
  );
}

