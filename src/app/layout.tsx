import "./globals.css"

export const metadata = {
  title: "AI Resume Platform",
  description: "Build AI powered resumes and check ATS score",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}