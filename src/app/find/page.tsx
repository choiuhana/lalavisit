import Link from "next/link";

export const metadata = {
	title: "센터 위치 | 라라재가방문요양센터",
};

export default function FindPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8 text-gray-800">오시는 길</h1>

			<div className="mb-8">
				<h2 className="text-2xl font-bold mb-4 text-blue-700">라라재가방문요양센터</h2>
				<p className="text-xl mb-2"><strong>주소:</strong> 송파구 송파대로 24길 5-13, 303호 (가락동 104-7)</p>
				<p className="text-xl"><strong>연락처:</strong> 02-430-2351 / 010-9573-2351</p>
			</div>

			<div className="mb-6">
				<iframe
					src="https://maps.google.com/maps?q=송파구 송파대로 24길 5-13&t=&z=15&ie=UTF8&iwloc=&output=embed"
					className="w-full h-80 border-0 rounded-lg shadow-md"
					loading="lazy"
				></iframe>
			</div>

			<div className="space-y-6 text-gray-700">
				<div>
					<h2 className="text-2xl font-semibold mb-3">지하철 이용시</h2>
					<p className="ml-4 text-lg">- 가락시장역 6번출구 도보5분</p>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-3">버스 이용시 (문정로데오거리입구 버스정류장)</h2>
					<p className="ml-4 text-lg">- 461(간선), 3011(지선), 3217(지선), 3317(지선), 36(일반)</p>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-3">주차시설</h2>
					<p className="ml-4 text-lg">건물 뒷편 (주차공간이 협소하여 미리 연락 필요)</p>
				</div>

				<div className="pt-2">
					<p className="font-medium">연락처: 02-430-2351 / 010-9573-2351</p>
				</div>
			</div>

			<div className="mt-12 text-center">
				<Link href="/" className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
					<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
					</svg>
					첫 화면으로 돌아가기
				</Link>
			</div>
		</div>
	);
}
