import { Geist, Geist_Mono, Roboto } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
