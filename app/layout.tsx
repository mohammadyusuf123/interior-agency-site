import "./globals.css"
import { Inter } from "next/font/google"

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
