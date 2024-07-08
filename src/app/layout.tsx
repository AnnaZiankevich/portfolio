import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import classNames from "classnames";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Ziankevich - Frontend Developer💻",
  description: "React Next TypeScript JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
