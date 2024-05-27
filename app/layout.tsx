import type { Metadata } from "next";
import { Roboto, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NextTopLoader from "nextjs-toploader";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Trusmi",
  description: "Trsusmi",
  authors: [
    {
      name: "GSM Feed",
      url: "https://gsmfeed.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="mainTheme"
      className={`${roboto.variable} ${quickSand.variable}`}
    >
      <body
        className={`flex flex-col justify-center items-center min-w-[100dvw] max-w-[100dvw]`}
      >
        <NextTopLoader color="#25BBB7" showSpinner={false} />
        <Header />
        <main className="w-full px-5 lg:px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
