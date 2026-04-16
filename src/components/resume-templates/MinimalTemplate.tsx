type Props = {
  resume: any
}

export default function MinimalTemplate({ resume }: Props) {

  const { basicInfo, education } = resume

  return (
    <div className="bg-white p-10 shadow max-w-2xl mx-auto">

      <h1 className="text-2xl font-bold">
        {basicInfo.name}
      </h1>

      <p className="text-sm text-gray-600">
        {basicInfo.phone} | {basicInfo.email}
      </p>

      <section className="mt-6">

        <h2 className="font-semibold border-b pb-1">
          Education
        </h2>

        {education.map((edu: any, i: number) => (
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

    </div>
  )
}