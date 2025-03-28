import type { Metadata } from "next";
import "./globals.css";
import VantaBackground from "@/components/background/VantaBackground";
import { Roboto, Roboto_Mono, Borel } from "next/font/google";
import Navbar from "@/components/marginals/navbar";
import Footer from "@/components/marginals/footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const borel = Borel({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-borel",
});

export const metadata: Metadata = {
  title: "Dhrutinandan Swain",
  description: "Portfolio site of Dhrutinandan Swain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} ${borel.variable}`}
    >
      <body
        className={roboto.className}
        style={{ overflow: "auto", height: "100%" }}
      >
        <VantaBackground>
          <Navbar />
          {children}
          <Footer />
        </VantaBackground>
      </body>
    </html>
  );
}
