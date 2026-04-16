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
    return <div className="p-10">Loading Resume...</div>
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
    value={resume.basicInfo.name}
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
    value={resume.basicInfo.email}
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
    value={resume.basicInfo.phone}
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

    
  )
}