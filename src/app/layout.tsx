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
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <meta name="url" content="http://www.koopaquerales.com" />
        <meta itemProp="url" content="http://www.koopaquerales.com" />

        <meta property="og:site_name" content="Koopa Querales" />
        <meta property="og:title" content="Koopa Querales" />
        <meta property="og:url" content="http://www.koopaquerales.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Official Website of Koopa Querales. The single Tomorrow Will Be Flies is available now." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1194786810737647617/rBxiNz9S_400x400.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@koopaquerales" />
        <meta name="twitter:title" content="Koopa Querales - singer-songwriter and guitarist from Venezuela" />
        <meta name="twitter:url" content="http://www.koopaquerales.com" />
        <meta name="twitter:description" content="Koopa Querales is a singer-songwriter and guitarist from Venezuela, whose music is heavily influenced by the '80s and early '00s rock" />
        <meta name="twitter:creator" content="@koopaquerales" />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1194786810737647617/rBxiNz9S_400x400.jpg" />
      </head>
      <body
        className={`${permanentMarkerFont.variable} ${permanentMarkerFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
