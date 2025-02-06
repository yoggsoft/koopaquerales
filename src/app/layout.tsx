import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const permanentMarkerFont = Permanent_Marker({
  variable: "--font-geist-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koopa Querales - Official Website",
  description: "Official Website of Koopa Querales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarkerFont.variable} ${permanentMarkerFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
