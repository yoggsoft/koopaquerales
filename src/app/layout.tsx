import type { Metadata } from 'next';
import { Fira_Sans_Condensed } from 'next/font/google';
import "./globals.css";

const FiraSansFont = Fira_Sans_Condensed({
  variable: "--font-fira-sans",
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
    images: "http://www.koopaquerales.com/img/opengraph-image.jpg"
  },
  twitter: {
    card: 'summary_large_image',
    site: "@koopaquerales",
    title: "Koopa Querales - singer-songwriter and guitarist from Venezuela",
    description: "Official Website of Koopa Querales. Listen on all platforms.",
    creator: "@koopaquerales",
    images: "http://www.koopaquerales.com/img/opengraph-image.jpg"
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

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Koopa Querales",
  "url": "http://www.woorank.com",
  "disambiguatingDescription": "Venezuelan singer-songwriter",
  "nationality": "Spain, Venezuelan",
  "sameAs": [
    "https://twitter.com/koopaquerales",
    "https://www.facebook.com/koopaquerales",
    "https://www.soundcloud.com/koopaquerales",
    "https://www.instagram.com/koopaquerales/?hl=en",
    "https://artists.spotify.com/c/artist/26SaZCIwAtd9q93VhE7y60/profile"
  ]
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: woorankAssistant }} />
      </head>
      <body
        className={`${FiraSansFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
