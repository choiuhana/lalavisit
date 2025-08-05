import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: NextRequest) {
    const {name, email, message} = await req.json();

	console.log(process.env.NAVER_PASSWORD);

    const transporter = nodemailer.createTransport({
        host: "smtp.naver.com",
        port: 465,
        secure: true, // SSL 사용
        auth: {
            user: process.env.NAVER_USER,
            pass: process.env.NAVER_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"라라재가 문의" <${process.env.NAVER_USER}>`, // 보내는 사람 (SMTP 로그인 계정)
        to: process.env.NAVER_USER, // 수신자
        subject: `[문의] ${name}님으로부터 도착한 메일`,
        text: message,
        replyTo: email, // 문의한 사람이 작성한 메일 주소 (관리자 답장용)
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({success: true});
    } catch (err) {
        console.error("메일 전송 오류:", err);
        return NextResponse.json({success: false, error: err}, {status: 500});
    }
}
