import "./globals.css"
import "@/styles/layout.css"

export const metadata = {
  title: "Ruang Diskusi",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
