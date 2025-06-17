import { Metadata } from "next";
import ClientProvider from "@/components/ClientProvider";

// SEO 메타데이터 확장
export const metadata: Metadata = {
  title: "라라재가 요양센터 | 맞춤형 요양 서비스",
  description: "집에서 편안하게 받는 1:1 맞춤형 요양 서비스. 방문요양, 방문목욕, 방문간호 등 어르신을 위한 다양한 요양 서비스를 제공합니다.",
  keywords: "요양, 방문요양, 방문목욕, 방문간호, 노인돌봄, 재가요양, 요양서비스",
  openGraph: {
    title: "라라재가 요양센터 | 맞춤형 요양 서비스",
    description: "어르신의 편안한 일상을 위한 맞춤형 요양 서비스를 제공합니다.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454177697940-c43d9f9a7307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "라라재가요양센터",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ClientProvider />
    </div>
  );
}
