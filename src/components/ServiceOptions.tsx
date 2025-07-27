"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

interface ServiceOptionsProps {
	userType: "client" | "caregiver";
	serviceType: "visit" | "family" | "live-in" | null;
	setServiceType: (type: "visit" | "family" | "live-in") => void;
}

const ServiceOptions = ({ userType, serviceType, setServiceType }: ServiceOptionsProps) => {
	const [showContact, setShowContact] = useState(false);

	const info = () => {
		if (userType === "client" && serviceType === "visit") {
			return {
				title: "방문 요양",
				desc: "전문 요양보호사가 가정을 방문하여 돌봄 서비스를 제공합니다.",
			};
		}
		if (userType === "client" && serviceType === "family") {
			return {
				title: "가족 요양",
				desc: "가족이 직접 요양 서비스를 제공할 수 있도록 교육과 지원을 해드립니다.",
			};
		}
		if (userType === "client" && serviceType === "live-in") {
			return {
				title: "입주 간병",
				desc: "24시간 상주하며 어르신의 일상생활 전반을 도와드립니다.",
			};
		}
		if (userType === "caregiver" && serviceType === "visit") {
			return {
				title: "방문 요양 업무",
				desc: "어르신 댁을 방문하여 돌봄 서비스를 제공하는 일자리입니다.",
			};
		}
		if (userType === "caregiver" && serviceType === "family") {
			return {
				title: "가족 요양 지원",
				desc: "가족 요양 프로그램에 참여하여 서비스를 제공합니다.",
			};
		}
		if (userType === "caregiver" && serviceType === "live-in") {
			return {
				title: "입주 간병 업무",
				desc: "어르신 댁에 상주하며 전문적인 간병 서비스를 제공합니다.",
			};
		}
		return null;
	};

	const contextMsg = `대상: ${userType}, 서비스: ${serviceType}`;

	if (!serviceType) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				<button
					onClick={() => setServiceType("visit")}
					className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-blue-200 text-gray-800"
				>
					<div className="text-4xl mb-4">🏠</div>
					<h3 className="text-lg font-semibold mb-2">방문 요양을 원해요</h3>
					<p className="text-sm text-gray-700">집으로 방문하는 돌봄 서비스</p>
				</button>
				<button
					onClick={() => setServiceType("family")}
					className="bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-green-200 text-gray-800"
				>
					<div className="text-4xl mb-4">👪</div>
					<h3 className="text-lg font-semibold mb-2">가족 요양을 원해요</h3>
					<p className="text-sm text-gray-700">가족이 돌봄을 제공하는 서비스</p>
				</button>
				<button
					onClick={() => setServiceType("live-in")}
					className="bg-purple-100 hover:bg-purple-200 p-6 rounded-xl shadow-md transition transform hover:-translate-y-1 border border-purple-200 text-gray-800"
				>
					<div className="text-4xl mb-4">👩‍⚕️</div>
					<h3 className="text-lg font-semibold mb-2">입주 간병을 원해요</h3>
					<p className="text-sm text-gray-700">24시간 전문 간병 서비스</p>
				</button>
			</div>
		);
	}

	const detail = info();

	return (
		<div className="space-y-6 text-center">
			<h3 className="text-xl font-semibold">{detail?.title}</h3>
			<p>{detail?.desc}</p>
			<div className="flex flex-col sm:flex-row gap-4 justify-center">
				<Link
					href="/find"
					className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium text-center flex-1"
				>
					센터를 방문할게요
				</Link>
				<button
					onClick={() => setShowContact(true)}
					className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition shadow-md font-medium flex-1"
				>
					문의하고 싶어요
				</button>
			</div>
			<ContactModal showContact={showContact} setShowContact={setShowContact} context={contextMsg} />
		</div>
	);
};

export default ServiceOptions;
