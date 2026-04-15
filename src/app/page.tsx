import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">

      <h1 className="text-5xl font-bold mb-6">
        AI Resume Platform
      </h1>

      <p className="text-lg mb-8">
        Build professional resumes, check ATS score, and explore community resumes.
      </p>

      <Link
        href="/build-resume"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Build AI Resume
      </Link>

    </main>
  )
}