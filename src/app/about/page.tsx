import Image from "next/image";
import Link from "next/link";

export const metadata = {
	title: "센터 소개 | 라라재가방문요양센터",
};

export default function AboutPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<h1 className="text-4xl font-bold mb-8 text-gray-800">센터 소개</h1>
			<div className="mb-8">
				<Image
					src="/centre-for-ageing-better-rQJ3xo-0WYE-unsplash.jpg"
					alt="간병인이 노인 여성에게 약을 건네는 장면"
					width={1200}
					height={800}
					className="w-full h-64 object-cover rounded-lg mb-6"
				/>

				<p className="mb-4 text-gray-700">
					라라재가방문요양센터는 어르신의 행복한 일상을 위해 최선을 다합니다. 전문 요양보호사가 맞춤형 서비스를 제공하며,
					가족처럼 따뜻한 돌봄을 약속드립니다.
				</p>
				<p className="mb-4 text-gray-700">
					주요 서비스로는 방문요양, 방문목욕, 방문간호 등이 있으며, 신체·정서·인지 활동을 종합적으로 지원합니다.
				</p>
				<p className="mb-4 text-gray-700">
					항상 열린 마음으로 상담해 드리니 궁금한 점이 있으면 언제든지 문의해 주세요.
				</p>
			</div>

			<div className="mb-10">
				<h2 className="text-3xl font-bold mb-5 text-gray-800">방문요양 이용 안내</h2>
				<p className="mb-4 text-gray-700">
					방문요양은 재가급여 월 한도액내에서 본인부담금을 통해서 서비스를 제공받을 수 있습니다.
				</p>
				<p className="mb-4 text-gray-700">
					본인부담금은 방문 시간 당 수가 대비 15%입니다.
				</p>

				<div className="overflow-x-auto mb-4">
					<table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
						<thead>
							<tr className="bg-gray-100">
								<th className="border border-gray-300 px-3 py-2">방문당 시간</th>
								<th className="border border-gray-300 px-3 py-2">수가</th>
								<th className="border border-gray-300 px-3 py-2">15%</th>
								<th className="border border-gray-300 px-3 py-2">9%</th>
								<th className="border border-gray-300 px-3 py-2">6%</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">30분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">16,940원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">2,541원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">1,525원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">1,016원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">60분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">24,580원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">3,687원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">2,212원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">1,475원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">90분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">33,120원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">4,968원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">2,981원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">1,987원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">120분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">42,160원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">6,324원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">3,794원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">2,530원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">150분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">49,160원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">7,374원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">4,424원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">2,950원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">180분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">55,350원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">8,303원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">4,982원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">3,321원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">210분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">61,670원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">9,251원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">5,550원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">3,700원</td>
							</tr>
							<tr>
								<td className="border border-gray-300 px-3 py-2 text-center">240분</td>
								<td className="border border-gray-300 px-3 py-2 text-right">68,030원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">10,205원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">6,123원</td>
								<td className="border border-gray-300 px-3 py-2 text-right">4,082원</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p className="mb-2 text-gray-700">차상위계층 등 저소득층은 9% 또는 6%로 감면됩니다.</p>
				<p className="mb-2 text-gray-700">기초생활 수급자는 본인부담금이 0%로 별도의 비용을 내지 않습니다.</p>
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
