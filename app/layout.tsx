import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Select Mobile Tyres - Fast Tyre Fitting Service in London",
  description:
    "Professional mobile tyre fitting service in London. 24/7 emergency roadside assistance, same-day service, and expert tyre replacement at your location.",
  keywords:
    "mobile tyre fitting, mobile tyre fitting near me, tyre fitting near me, mobile tyre repair, mobile tyre replacement, mobile tyre service, mobile tyre repair near me, tyre fitting, emergency tyre repair, emergency tyre replacement, emergency mobile tyre fitting, emergency tyre repair near me, roadside tyre repair, emergency tyre fitting, 24 hour tyre repair, mobile tyre fitting service, 24 hour mobile tyre fitting, emergency tyre change, emergency tyre fitting near me, local mobile tyre fitters, mobile fitting tyres near me, 24hr mobile tyre fitting, mobile tyre van, emergency mobile tyre, mobile tyre fitting 24 hours, 24 hour tyre replacement, best mobile tyre fitting, mobile tyre fitting London, emergency tyre service, roadside tyre assistance, same day tyre fitting, 24/7 tyre service",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo.webp",
        type: "image/webp",
      },
    ],
    apple: "/logo.webp",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e293b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-18245200416" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18245200416');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
