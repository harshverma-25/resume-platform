import { ResumeData } from "@/types/resume";

export default function MinimalTemplate({ resume }: { resume: ResumeData }) {
  const { basicInfo, summary, education, experience, projects, achievements, skills } = resume;

  return (
    <div className="bg-white p-12 text-black h-full overflow-y-auto font-serif selection:bg-neutral-200">
      {/* Header */}
      <header className="mb-8 border-b-2 border-black pb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2 uppercase">{basicInfo.name || "Your Name"}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600">
          {basicInfo.email && <span>{basicInfo.email}</span>}
          {basicInfo.phone && <span>{basicInfo.phone}</span>}
          {basicInfo.linkedin && <span>LinkedIn</span>}
          {basicInfo.github && <span>GitHub</span>}
          {basicInfo.portfolio && <span>Portfolio</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-8">
          <p className="text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest border-b border-neutral-200 pb-1 mb-4">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-sm">{exp.company}</h3>
                <span className="text-xs italic text-neutral-500">{exp.role}</span>
              </div>
              <p className="text-xs text-neutral-700 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest border-b border-neutral-200 pb-1 mb-4">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-sm">{edu.college}</h3>
                <p className="text-xs text-neutral-600">{edu.course}</p>
              </div>
              <span className="text-xs">{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-sm font-black uppercase tracking-widest border-b border-neutral-200 pb-1 mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs">
           <div><span className="font-bold">Languages:</span> {skills.languages}</div>
           <div><span className="font-bold">Frameworks:</span> {skills.frameworks}</div>
           <div><span className="font-bold">Tools:</span> {skills.tools}</div>
           <div><span className="font-bold">Cloud:</span> {skills.cloud}</div>
        </div>
      </section>
    </div>
  );
}