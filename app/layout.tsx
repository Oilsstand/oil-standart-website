import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Oil-Standart - Формовочные смазки и СОЖ серии СТАНДАРТ",
  description:
    "Производство формовочных смазок, СОЖ серии СТАНДАРТ и поставка технических жидкостей для промышленности. Качество и надежность для вашего производства.",
  keywords: "формовочные смазки, СОЖ, смазочно-охлаждающие жидкости, технические жидкости, Oil-Standart, производство",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: "Oil-Standart - Формовочные смазки и СОЖ серии СТАНДАРТ",
    description:
      "Производство формовочных смазок, СОЖ серии СТАНДАРТ и поставка технических жидкостей для промышленности",
    url: "https://oil-standart.com",
    siteName: "Oil-Standart",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <meta name="yandex-verification" content="558f03556945edd5" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
