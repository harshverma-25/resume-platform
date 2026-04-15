"use client"

import { useEffect, useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export default function ResumeEditor() {

  const [resume, setResume] = useState<any>(null)

  useEffect(() => {
    const data = localStorage.getItem("resumeData")

    if (data) {
      setResume(JSON.parse(data))
    }
  }, [])

  const downloadPDF = async () => {
    const element = document.getElementById("resume-preview")

    if (!element) return

    const canvas = await html2canvas(element)

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

  const { basicInfo, education, skills, experience, projects, achievements } =
    resume

  return (
    <div className="flex min-h-screen">

      {/* LEFT PANEL */}
      <div className="w-1/2 p-8 border-r overflow-y-scroll">

        <h1 className="text-2xl font-bold mb-6">
          Resume Data
        </h1>

        <pre className="text-sm bg-gray-100 p-4 rounded">
          {JSON.stringify(resume, null, 2)}
        </pre>

      </div>

      {/* RIGHT PANEL */}
      <div className="w-1/2 p-10 bg-gray-100 overflow-y-scroll">

        <button
          onClick={downloadPDF}
          className="mb-6 bg-black text-white px-5 py-2 rounded"
        >
          Download PDF
        </button>

        <div
          id="resume-preview"
          className="bg-white p-10 shadow max-w-2xl mx-auto"
        >

          {/* HEADER */}
          <h1 className="text-2xl font-bold">
            {basicInfo?.name}
          </h1>

          <p className="text-sm text-gray-600">
            {basicInfo?.phone} | {basicInfo?.email}
          </p>

          <p className="text-sm text-gray-600">
            {basicInfo?.linkedin} | {basicInfo?.github} | {basicInfo?.portfolio}
          </p>

          {/* SUMMARY */}
          <section className="mt-6">
            <h2 className="font-semibold border-b pb-1">
              Summary
            </h2>

            <p className="text-sm mt-2">
              AI generated summary will appear here.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Education
            </h2>

            {education?.map((edu: any, i: number) => (
              <div key={i} className="text-sm mt-2">

                <p className="font-medium">
                  {edu.college}
                </p>

                <p>
                  {edu.course} | {edu.year}
                </p>

              </div>
            ))}

          </section>

          {/* SKILLS */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Technical Skills
            </h2>

            <p className="text-sm mt-2">
              <b>Languages:</b> {skills?.languages}
            </p>

            <p className="text-sm">
              <b>Frameworks:</b> {skills?.frameworks}
            </p>

            <p className="text-sm">
              <b>Databases:</b> {skills?.databases}
            </p>

            <p className="text-sm">
              <b>Tools:</b> {skills?.tools}
            </p>

          </section>

          {/* EXPERIENCE */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Experience
            </h2>

            {experience?.map((exp: any, i: number) => (
              <div key={i} className="text-sm mt-2">

                <p className="font-medium">
                  {exp.company} — {exp.role}
                </p>

                <p>{exp.description}</p>

              </div>
            ))}

          </section>

          {/* PROJECTS */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Projects
            </h2>

            {projects?.map((proj: any, i: number) => (
              <div key={i} className="text-sm mt-2">

                <p className="font-medium">
                  {proj.name} ({proj.tech})
                </p>

                <p>{proj.description}</p>

                <p className="text-blue-600 text-xs">
                  {proj.github} | {proj.live}
                </p>

              </div>
            ))}

          </section>

          {/* ACHIEVEMENTS */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Achievements
            </h2>

            <ul className="text-sm mt-2 list-disc ml-5">

              {achievements?.map((ach: string, i: number) => (
                <li key={i}>{ach}</li>
              ))}

            </ul>

          </section>

        </div>

      </div>

    </div>
  )
}