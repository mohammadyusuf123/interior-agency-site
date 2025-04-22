import Header from "@/components/header"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"

// Use Inter font instead of Poppins since it's more reliably available
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "InDecor - Interior Design Excellence",
  description: "Transform your spaces with our expert interior design services",
    generator: 'v0.dev'
}

import { ReactNode } from "react";
import MobileNavbar from "@/components/mobile-navbar"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
      <MobileNavbar />
      {/* Uncomment the line above to enable the mobile navbar */}
    </html>
  )
}
