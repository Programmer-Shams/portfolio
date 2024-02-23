import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import './global.scss'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700",],
});

export const metadata: Metadata = {
  title: "Shams Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
