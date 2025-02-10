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
  openGraph: {
    siteName: "Koopa Querales",
    title: "Koopa Querales",
    url: "http://www.koopaquerales.com",
    type: "website",
    description: "Official Website of Koopa Querales. Listen on all platforms.",
    locale: "en_US",
    images: "/img/opengraph-image.jpg"
  },
  twitter: {
    card: 'summary_large_image',
    site: "@koopaquerales",
    title: "Koopa Querales - singer-songwriter and guitarist from Venezuela",
    description: "Official Website of Koopa Querales. Listen on all platforms.",
    creator: "@koopaquerales",
    images: "/img/opengraph-image.jpg"
  }
};

const woorankAssistant = `
  window.woorankAssistantOptions = window.woorankAssistantOptions || {};
  window.woorankAssistantOptions.url = 'koopaquerales.com';
  window.woorankAssistantOptions.assistantPublicKey = 'fde41ea65dae85425d58fb96391070ce';
  window.woorankAssistantOptions.collectWebVitals = true;
  (function() {
    var wl = document.createElement('script'); wl.type = 'text/javascript'; wl.async = true;
    wl.src = 'https://assistant.woorank.com/hydra/assistantLoader.latest.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wl, s);
  })();`;

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
        <script type="text/javascript">
          {woorankAssistant}
        </script>
      </head>
      <body
        className={`${permanentMarkerFont.variable} ${permanentMarkerFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
