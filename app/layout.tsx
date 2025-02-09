import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "성실버의 포트폴리오",
};

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(pretendard)
  return (
    <html lang="kr" className={pretendard.variable} style={pretendard.style}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
