import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import { Noto_Sans_Mono } from "next/font/google";

const notoSansMono = Noto_Sans_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dropbox",
  description: "Dropbox Animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className={` antialiased ${notoSansMono.className}`}>
          {children}
        </body>
      </html>
    </ReactLenis>
  );
}
