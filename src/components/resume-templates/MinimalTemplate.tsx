type Props = {
  resume: any
}

export default function MinimalTemplate({ resume }: Props) {

  const { basicInfo, education, skills, experience, projects, achievements } =
    resume

  return (
    <div className="bg-white p-10 max-w-3xl mx-auto text-sm">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">
        {basicInfo?.name}
      </h1>

      <p className="text-gray-600">
        {basicInfo?.phone} | {basicInfo?.email}
      </p>

      <p className="text-gray-600">
        {basicInfo?.linkedin} | {basicInfo?.github}
      </p>

      {/* EDUCATION */}
      <section className="mt-6">

        <h2 className="font-semibold border-b pb-1">
          Education
        </h2>

        {education?.map((edu: any, i: number) => (
          <div key={i} className="mt-2">

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

        <p className="mt-2">
          <b>Languages:</b> {skills?.languages}
        </p>

        <p>
          <b>Frameworks:</b> {skills?.frameworks}
        </p>

        <p>
          <b>Databases:</b> {skills?.databases}
        </p>

        <p>
          <b>Tools:</b> {skills?.tools}
        </p>

      </section>

      {/* EXPERIENCE */}
      <section className="mt-6">

        <h2 className="font-semibold border-b pb-1">
          Experience
        </h2>

        {experience?.map((exp: any, i: number) => (
          <div key={i} className="mt-2">

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
          <div key={i} className="mt-2">

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

        <ul className="list-disc ml-5 mt-2">

          {achievements?.map((a: string, i: number) => (
            <li key={i}>{a}</li>
          ))}

        </ul>

      </section>

    </div>
  )
}