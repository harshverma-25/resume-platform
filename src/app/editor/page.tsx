"use client"

import { useState } from "react"

export default function ResumeEditor() {

  const [resume, setResume] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe",
    portfolio: "johndoe.dev",

    summary:
      "Full-stack developer experienced in building scalable web applications using modern JavaScript frameworks.",

    education: [
      {
        college: "ITM College Gwalior",
        course: "BTech Computer Science",
        year: "2023 – 2027",
      },
    ],

    skills: {
      languages: "JavaScript, Python",
      frameworks: "React, Next.js",
      databases: "MongoDB, MySQL",
      tools: "Git, Docker",
    },

    experience: [
      {
        company: "Tech Company",
        role: "Frontend Developer",
        description:
          "Built reusable UI components and improved application performance.",
      },
    ],

    projects: [
      {
        name: "Resume Builder",
        tech: "Next.js, MongoDB",
        description:
          "Developed an AI powered resume builder platform with live preview.",
        github: "github.com/project",
        live: "project.com",
      },
    ],

    achievements: [
      "Solved 400+ problems on LeetCode",
      "Smart India Hackathon participant",
    ],
  })

  return (
    <div className="flex min-h-screen">

      {/* LEFT SIDE EDITOR */}
      <div className="w-1/2 p-8 border-r overflow-y-scroll">

        <h1 className="text-2xl font-bold mb-6">
          Resume Editor
        </h1>

        {/* NAME */}
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Name
          </label>

          <input
            className="border p-2 w-full"
            value={resume.name}
            onChange={(e) =>
              setResume({ ...resume, name: e.target.value })
            }
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Email
          </label>

          <input
            className="border p-2 w-full"
            value={resume.email}
            onChange={(e) =>
              setResume({ ...resume, email: e.target.value })
            }
          />
        </div>

        {/* PHONE */}
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Phone
          </label>

          <input
            className="border p-2 w-full"
            value={resume.phone}
            onChange={(e) =>
              setResume({ ...resume, phone: e.target.value })
            }
          />
        </div>

        {/* SUMMARY */}
        <div className="mb-4">
          <label className="block text-sm font-medium">
            Summary
          </label>

          <textarea
            className="border p-2 w-full"
            value={resume.summary}
            onChange={(e) =>
              setResume({ ...resume, summary: e.target.value })
            }
          />
        </div>

      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="w-1/2 p-10 bg-gray-100 overflow-y-scroll">

        <div className="bg-white p-10 shadow max-w-2xl mx-auto">

          {/* HEADER */}
          <h1 className="text-2xl font-bold">
            {resume.name}
          </h1>

          <p className="text-sm text-gray-600">
            {resume.phone} | {resume.email}
          </p>

          <p className="text-sm text-gray-600">
            {resume.linkedin} | {resume.github} | {resume.portfolio}
          </p>

          {/* SUMMARY */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Summary
            </h2>

            <p className="text-sm mt-2">
              {resume.summary}
            </p>

          </section>

          {/* EDUCATION */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Education
            </h2>

            {resume.education.map((edu, i) => (
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
              <b>Languages:</b> {resume.skills.languages}
            </p>

            <p className="text-sm">
              <b>Frameworks:</b> {resume.skills.frameworks}
            </p>

            <p className="text-sm">
              <b>Databases:</b> {resume.skills.databases}
            </p>

            <p className="text-sm">
              <b>Tools:</b> {resume.skills.tools}
            </p>

          </section>

          {/* EXPERIENCE */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Experience
            </h2>

            {resume.experience.map((exp, i) => (
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

            {resume.projects.map((proj, i) => (
              <div key={i} className="text-sm mt-2">

                <p className="font-medium">
                  {proj.name} ({proj.tech})
                </p>

                <p>{proj.description}</p>

              </div>
            ))}

          </section>

          {/* ACHIEVEMENTS */}
          <section className="mt-6">

            <h2 className="font-semibold border-b pb-1">
              Achievements
            </h2>

            <ul className="text-sm mt-2 list-disc ml-5">

              {resume.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}

            </ul>

          </section>

        </div>

      </div>

    </div>
  )
}