import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import classNames from "classnames";
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable: '--Poppins'
})

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
      <body className={classNames(poppins.className, )}>{children}</body>
    </html>
  );
}
