type Props = {
  resume: any
}

export default function ModernTemplate({ resume }: Props) {

  const { basicInfo, education } = resume

  return (
    <div className="bg-white p-10 shadow-lg max-w-2xl mx-auto border-l-4 border-blue-500">

      <h1 className="text-3xl font-bold text-blue-600">
        {basicInfo.name}
      </h1>

      <p className="text-sm mt-1">
        {basicInfo.phone} | {basicInfo.email}
      </p>

      <section className="mt-6">

        <h2 className="font-semibold text-blue-600">
          Education
        </h2>

        {education.map((edu: any, i: number) => (
          <div key={i} className="text-sm mt-2">

            <p className="font-medium">
              {edu.college}
            </p>

            <p>
              {edu.course} — {edu.year}
            </p>

          </div>
        ))}

      </section>

    </div>
  )
}