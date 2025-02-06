import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      {/*       
        _   _______  ___________  ___
        | | / /  _  ||  _  | ___ \/ _ \
        | |/ /| | | || | | | |_/ / /_\ \
        |    \| | | || | | |  __/|  _  |
        | |\  \ \_/ /\ \_/ / |   | | | |
        \_| \_/\___/  \___/\_|   \_| |_/


        _____ _   _ ___________  ___   _      _____ _____
        |  _  | | | |  ___| ___ \/ _ \ | |    |  ___/  ___|
        | | | | | | | |__ | |_/ / /_\ \| |    | |__ \ `--.
        | | | | | | |  __||    /|  _  || |    |  __| `--. \
        \ \/' / |_| | |___| |\ \| | | || |____| |___/\__/ /
        \_/\_\\___/\____/\_| \_\_| |_/\_____/\____/\____/
       */}
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="{{ '/assets/css/main.css' | prepend: site.baseurl }}" />
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="image/png" href="{{ site.imgBasePath }}/favicon.png" />
        <meta name="title" content="Koopa Querales" />
        <meta name="description" content="Koopa Querales is a singer-songwriter and guitarist from Venezuela, whose music is heavily influenced by the '80s and early '00s rock" />
        <meta name="url" content="http://www.koopaquerales.com" />
        <meta itemProp="url" content="http://www.koopaquerales.com" />

        {/* OpenGraph data */}
        <meta property="og:site_name" content="Koopa Querales" />
        <meta property="og:title" content="Koopa Querales" />
        <meta property="og:url" content="http://www.koopaquerales.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Official Website of Koopa Querales. The single Tomorrow Will Be Flies is available now." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1194786810737647617/rBxiNz9S_400x400.jpg" />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@koopaquerales" />
        <meta name="twitter:title" content="Koopa Querales - singer-songwriter and guitarist from Venezuela" />
        <meta name="twitter:url" content="http://www.koopaquerales.com" />
        <meta name="twitter:description" content="Koopa Querales is a singer-songwriter and guitarist from Venezuela, whose music is heavily influenced by the ‘80s and early ‘00s rock" />
        <meta name="twitter:creator" content="@koopaquerales" />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1194786810737647617/rBxiNz9S_400x400.jpg" />
        {/* <script type="application/ld+json">
          {
            "@context": "http://schema.org",
            "@type":"Person",
            "name":"Koopa Querales",
            "url":"http://www.koopaquerales.com",
            "disambiguatingDescription":"Venezuelan singer-songwriter",
            "nationality":"Spain, Venezuelan",
            "sameAs":[
              "https://twitter.com/koopaquerales",
              "https://www.facebook.com/koopaquerales",
              "https://www.instagram.com/koopaquerales",
              "https://www.soundcloud.com/koopaquerales",
              "https://artists.spotify.com/c/artist/26SaZCIwAtd9q93VhE7y60/profile"
            ]
          }
        </script> */}
        {/* <script type="text/javascript">
          window.woorankAssistantOptions = window.woorankAssistantOptions || {};
          window.woorankAssistantOptions.url = 'koopaquerales.com';
          window.woorankAssistantOptions.assistantPublicKey = 'fde41ea65dae85425d58fb96391070ce';
          window.woorankAssistantOptions.collectWebVitals = true;
          (function() {
            var wl = document.createElement('script'); wl.type = 'text/javascript'; wl.async = true;
            wl.src = 'https://assistant.woorank.com/hydra/assistantLoader.latest.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wl, s);
          })();
        </script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
