"use client"

import { useEffect, useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import MinimalTemplate from "@/components/resume-templates/MinimalTemplate"
import ModernTemplate from "@/components/resume-templates/ModernTemplate"

export default function ResumeEditor() {

  const [resume, setResume] = useState<any>(null)
  const [template, setTemplate] = useState("minimal")

  useEffect(() => {
    const data = localStorage.getItem("resumeData")

    if (data) {
      setResume(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
  if (resume) {
    localStorage.setItem("resumeData", JSON.stringify(resume))
  }
}, [resume])

  const downloadPDF = async () => {
    const element = document.getElementById("resume-preview")

    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true
    })

    const imgData = canvas.toDataURL("image/png")

    const pdf = new jsPDF("p", "mm", "a4")

    const width = 210
    const height = (canvas.height * width) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, width, height)
    pdf.save("resume.pdf")
  }

  if (!resume) {
  return (
    <div className="p-10 flex flex-col items-center gap-4">

      <h1 className="text-xl font-semibold">
        No Resume Data Found
      </h1>

      <p className="text-gray-600">
        Please build a resume first.
      </p>

      <a
        href="/build-resume"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Go to Resume Builder
      </a>

    </div>
  )
}

  return (
    <div className="flex min-h-screen">

      {/* LEFT PANEL */}
      <div className="w-1/2 p-8 border-r overflow-y-scroll">

        <h1 className="text-2xl font-bold mb-6">
          Edit Resume
        </h1>

        <label className="block text-sm font-medium">
          Name
        </label>

        <input
          className="border p-2 w-full mb-4"
          value={resume.basicInfo?.name}
          onChange={(e) =>
            setResume({
              ...resume,
              basicInfo: {
                ...resume.basicInfo,
                name: e.target.value
              }
            })
          }
        />

        <label className="block text-sm font-medium">
          Email
        </label>

        <input
          className="border p-2 w-full mb-4"
          value={resume.basicInfo?.email}
          onChange={(e) =>
            setResume({
              ...resume,
              basicInfo: {
                ...resume.basicInfo,
                email: e.target.value
              }
            })
          }
        />

        <label className="block text-sm font-medium">
          Phone
        </label>

        <input
          className="border p-2 w-full mb-4"
          value={resume.basicInfo?.phone}
          onChange={(e) =>
            setResume({
              ...resume,
              basicInfo: {
                ...resume.basicInfo,
                phone: e.target.value
              }
            })
          }
        />

      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 p-10 bg-gray-100 overflow-y-scroll">

        {/* TEMPLATE SELECTOR */}
        <div className="mb-6 flex gap-3">

          <button
            onClick={() => setTemplate("minimal")}
            className="border px-4 py-2"
          >
            Minimal
          </button>

          <button
            onClick={() => setTemplate("modern")}
            className="border px-4 py-2"
          >
            Modern
          </button>

        </div>

        {/* DOWNLOAD BUTTON */}
        <button
          onClick={downloadPDF}
          className="mb-6 bg-black text-white px-5 py-2 rounded"
        >
          Download PDF
        </button>

        {/* RESUME PREVIEW */}
        <div id="resume-preview">

          {template === "minimal" && (
            <MinimalTemplate resume={resume} />
          )}

          {template === "modern" && (
            <ModernTemplate resume={resume} />
          )}

        </div>

      </div>

    </div>
  )
}