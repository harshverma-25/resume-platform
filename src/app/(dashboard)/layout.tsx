"use client"

import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <aside className="w-20 bg-black text-white flex flex-col items-center py-6 space-y-6">

        <Link href="/dashboard">🏠</Link>

        <Link href="/build-resume">📄</Link>

        <Link href="/my-resumes">📁</Link>

        <Link href="/community">🌎</Link>

        <Link href="/ats-checker">🤖</Link>

      </aside>

      {/* Content */}
      <main className="flex-1 p-10 bg-gray-50">
        {children}
      </main>

    </div>
  )
}