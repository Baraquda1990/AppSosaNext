import { Geist, Geist_Mono, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  title: {
    default: "Appsosa — Turn Surplus into Profit",
    template: "%s | Appsosa",
  },

  description:
    "Appsosa helps restaurants, food businesses, manufacturers and suppliers turn surplus products into profit through an innovative marketplace in Armenia.",

  applicationName: "Appsosa",

  keywords: [
    "Appsosa",
    "surplus food marketplace Armenia",
    "food waste reduction Armenia",
    "Surprise Bags Yerevan",
    "surplus inventory marketplace",
    "food surplus monetization",
    "B2B marketplace Armenia",
    "B2C marketplace Armenia",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Appsosa",
    title: "Appsosa — Turn Surplus into Profit",
    description:
      "Transform unsold products and surplus inventory into profit with Appsosa.",
    images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Appsosa — Turn Surplus into Profit",
    description:
      "Turn surplus products into profit with Appsosa.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable)}
    >
      <body className="h-dvh overflow-hidden">
        <ThemeProvider>
        <div className="min-h-dvh flex flex-col border-[10px] border-solid border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(45deg,#CE0003,#D1BC00)_border-box]">
          <JsonLd />
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
