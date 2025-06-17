export const metadata = {
  title: "센터 소개 | 라라재가 요양센터",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">센터 소개</h1>
      <p className="mb-4">라라재가 요양센터는 전문 요양 서비스를 제공하는 곳입니다. 가족같이 따뜻한 돌봄을 약속드립니다.</p>
      <p className="mb-8">방문 요양과 가족 요양 등 다양한 프로그램을 운영하고 있습니다.</p>
      <a href="/" className="text-blue-600 hover:underline">첫 화면으로 돌아가기</a>
    </div>
  );
}

