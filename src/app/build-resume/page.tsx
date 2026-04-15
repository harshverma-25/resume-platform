"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function BuildResumePage() {

  const router = useRouter()

  const [step, setStep] = useState(1)

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    portfolio: ""
  })

  const [education, setEducation] = useState([
    { college: "", course: "", year: "" }
  ])

  const [skills, setSkills] = useState({
    languages: "",
    frameworks: "",
    databases: "",
    tools: ""
  })

  const [experience, setExperience] = useState([
    { company: "", role: "", description: "" }
  ])

  const [projects, setProjects] = useState([
    { name: "", tech: "", github: "", live: "", description: "" }
  ])

  const [achievements, setAchievements] = useState([""])

  return (
    <div className="max-w-3xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Build Your Resume
      </h1>

      <p className="text-gray-500 mb-6">
        Step {step} of 6
      </p>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Basic Information
          </h2>

          <input
            className="border p-2 w-full"
            placeholder="Full Name"
            value={basicInfo.name}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, name: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="Email"
            value={basicInfo.email}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, email: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="Phone"
            value={basicInfo.phone}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, phone: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="LinkedIn URL"
            value={basicInfo.linkedin}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, linkedin: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="GitHub URL"
            value={basicInfo.github}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, github: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="Portfolio URL"
            value={basicInfo.portfolio}
            onChange={(e) =>
              setBasicInfo({ ...basicInfo, portfolio: e.target.value })
            }
          />

          <button
            onClick={() => setStep(2)}
            className="bg-black text-white px-5 py-2 rounded"
          >
            Next
          </button>

        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Education
          </h2>

          {education.map((edu, index) => (
            <div key={index} className="border p-4 rounded space-y-2">

              <input
                className="border p-2 w-full"
                placeholder="College Name"
                value={edu.college}
                onChange={(e) => {
                  const updated = [...education]
                  updated[index].college = e.target.value
                  setEducation(updated)
                }}
              />

              <input
                className="border p-2 w-full"
                placeholder="Course"
                value={edu.course}
                onChange={(e) => {
                  const updated = [...education]
                  updated[index].course = e.target.value
                  setEducation(updated)
                }}
              />

              <input
                className="border p-2 w-full"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => {
                  const updated = [...education]
                  updated[index].year = e.target.value
                  setEducation(updated)
                }}
              />

            </div>
          ))}

          <button
            className="text-blue-600"
            onClick={() =>
              setEducation([
                ...education,
                { college: "", course: "", year: "" }
              ])
            }
          >
            + Add Education
          </button>

          <div className="flex gap-3">

            <button onClick={() => setStep(1)}>
              Back
            </button>

            <button
              onClick={() => setStep(3)}
              className="bg-black text-white px-5 py-2 rounded"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Technical Skills
          </h2>

          <input
            className="border p-2 w-full"
            placeholder="Languages"
            value={skills.languages}
            onChange={(e) =>
              setSkills({ ...skills, languages: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="Frameworks"
            value={skills.frameworks}
            onChange={(e) =>
              setSkills({ ...skills, frameworks: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="Databases"
            value={skills.databases}
            onChange={(e) =>
              setSkills({ ...skills, databases: e.target.value })
            }
          />

          <input
            className="border p-2 w-full"
            placeholder="Tools"
            value={skills.tools}
            onChange={(e) =>
              setSkills({ ...skills, tools: e.target.value })
            }
          />

          <div className="flex gap-3">

            <button onClick={() => setStep(2)}>
              Back
            </button>

            <button
              onClick={() => setStep(4)}
              className="bg-black text-white px-5 py-2 rounded"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Experience
          </h2>

          {experience.map((exp, index) => (
            <div key={index} className="border p-4 rounded space-y-2">

              <input
                className="border p-2 w-full"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => {
                  const updated = [...experience]
                  updated[index].company = e.target.value
                  setExperience(updated)
                }}
              />

              <input
                className="border p-2 w-full"
                placeholder="Role"
                value={exp.role}
                onChange={(e) => {
                  const updated = [...experience]
                  updated[index].role = e.target.value
                  setExperience(updated)
                }}
              />

              <textarea
                className="border p-2 w-full"
                placeholder="Description"
                value={exp.description}
                onChange={(e) => {
                  const updated = [...experience]
                  updated[index].description = e.target.value
                  setExperience(updated)
                }}
              />

            </div>
          ))}

          <button
            className="text-blue-600"
            onClick={() =>
              setExperience([
                ...experience,
                { company: "", role: "", description: "" }
              ])
            }
          >
            + Add Experience
          </button>

          <div className="flex gap-3">

            <button onClick={() => setStep(3)}>
              Back
            </button>

            <button
              onClick={() => setStep(5)}
              className="bg-black text-white px-5 py-2 rounded"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* STEP 5 */}
      {step === 5 && (
        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Projects
          </h2>

          {projects.map((proj, index) => (
            <div key={index} className="border p-4 rounded space-y-2">

              <input
                className="border p-2 w-full"
                placeholder="Project Name"
                value={proj.name}
                onChange={(e) => {
                  const updated = [...projects]
                  updated[index].name = e.target.value
                  setProjects(updated)
                }}
              />

              <input
                className="border p-2 w-full"
                placeholder="Tech Used"
                value={proj.tech}
                onChange={(e) => {
                  const updated = [...projects]
                  updated[index].tech = e.target.value
                  setProjects(updated)
                }}
              />

              <input
                className="border p-2 w-full"
                placeholder="GitHub Link"
                value={proj.github}
                onChange={(e) => {
                  const updated = [...projects]
                  updated[index].github = e.target.value
                  setProjects(updated)
                }}
              />

              <input
                className="border p-2 w-full"
                placeholder="Live Link"
                value={proj.live}
                onChange={(e) => {
                  const updated = [...projects]
                  updated[index].live = e.target.value
                  setProjects(updated)
                }}
              />

              <textarea
                className="border p-2 w-full"
                placeholder="Description"
                value={proj.description}
                onChange={(e) => {
                  const updated = [...projects]
                  updated[index].description = e.target.value
                  setProjects(updated)
                }}
              />

            </div>
          ))}

          <button
            className="text-blue-600"
            onClick={() =>
              setProjects([
                ...projects,
                { name: "", tech: "", github: "", live: "", description: "" }
              ])
            }
          >
            + Add Project
          </button>

          <div className="flex gap-3">

            <button onClick={() => setStep(4)}>
              Back
            </button>

            <button
              onClick={() => setStep(6)}
              className="bg-black text-white px-5 py-2 rounded"
            >
              Next
            </button>

          </div>

        </div>
      )}

      {/* STEP 6 */}
      {step === 6 && (
        <div className="space-y-4">

          <h2 className="text-xl font-semibold">
            Achievements
          </h2>

          {achievements.map((ach, index) => (
            <input
              key={index}
              className="border p-2 w-full"
              placeholder="Achievement"
              value={ach}
              onChange={(e) => {
                const updated = [...achievements]
                updated[index] = e.target.value
                setAchievements(updated)
              }}
            />
          ))}

          <button
            className="text-blue-600"
            onClick={() =>
              setAchievements([...achievements, ""])
            }
          >
            + Add Achievement
          </button>

          <div className="flex gap-3">

            <button onClick={() => setStep(5)}>
              Back
            </button>

            <button
              className="bg-green-600 text-white px-5 py-2 rounded"
              onClick={() => router.push("/editor")}
            >
              Generate Resume
            </button>

          </div>

        </div>
      )}

    </div>
  )
}