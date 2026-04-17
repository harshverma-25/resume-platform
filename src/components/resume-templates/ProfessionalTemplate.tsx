import { ResumeData } from "@/types/resume";

export default function ProfessionalTemplate({ resume }: { resume: ResumeData }) {
  const { basicInfo, summary, education, experience, projects, achievements, skills } = resume;

  return (
    <div className="bg-white text-neutral-800 h-full overflow-y-auto p-12 font-serif selection:bg-neutral-200">
      <div className="text-center mb-10 border-b-4 border-neutral-900 pb-8">
        <h1 className="text-4xl font-black text-neutral-900 mb-2 uppercase tracking-tighter">{basicInfo.name || "Your Name"}</h1>
        <div className="flex justify-center gap-4 text-xs font-bold text-neutral-500 uppercase tracking-widest">
          <span>{basicInfo.email}</span>
          <span>•</span>
          <span>{basicInfo.phone}</span>
          <span>•</span>
          <span>{basicInfo.linkedin}</span>
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-black bg-neutral-900 text-white px-4 py-1 inline-block mb-4 uppercase italic">Technical Skills</h2>
          <div className="grid grid-cols-1 gap-3 text-sm border-l-2 border-neutral-100 pl-4">
             <p><span className="font-bold">Languages:</span> {skills.languages}</p>
             <p><span className="font-bold">Frameworks:</span> {skills.frameworks}</p>
             <p><span className="font-bold">Databases:</span> {skills.databases}</p>
             <p><span className="font-bold">Cloud & DevOps:</span> {skills.cloud}</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black bg-neutral-900 text-white px-4 py-1 inline-block mb-6 uppercase italic">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-base font-black uppercase tracking-tight">{exp.company}</h3>
                  <span className="text-xs font-bold text-neutral-400 italic">{exp.role}</span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-700 italic border-l-4 border-neutral-100 pl-4">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-black bg-neutral-900 text-white px-4 py-1 inline-block mb-6 uppercase italic">Education</h2>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-black">{edu.college}</h3>
                  <p className="text-sm italic text-neutral-600">{edu.course}</p>
                </div>
                <span className="text-xs font-bold">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
