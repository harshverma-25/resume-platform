import { ResumeData } from "@/types/resume";

export default function ModernTemplate({ resume }: { resume: ResumeData }) {
  const { basicInfo, summary, education, experience, projects, achievements, skills } = resume;

  return (
    <div className="bg-white text-neutral-900 h-full flex flex-col font-sans selection:bg-blue-100">
      <div className="bg-neutral-900 text-white p-12">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-black mb-2">{basicInfo.name || "Your Name"}</h1>
            <p className="text-blue-400 font-bold text-lg tracking-wide uppercase">{basicInfo.title || "Target Role"}</p>
          </div>
          <div className="text-right text-xs text-neutral-400 space-y-1">
            <p>{basicInfo.email}</p>
            <p>{basicInfo.phone}</p>
            <p className="text-neutral-500">{basicInfo.linkedin}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex gap-12 p-12 overflow-y-auto">
        <div className="flex-[2] space-y-10">
          {summary && (
            <section>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Profile</h2>
              <p className="text-sm leading-relaxed text-neutral-700">{summary}</p>
            </section>
          )}

          <section>
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-neutral-100">
                  <div className="absolute w-3 h-3 rounded-full bg-blue-500 -left-[7px] top-1.5" />
                  <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-neutral-900">{exp.company}</h3>
                    <span className="text-xs font-bold text-neutral-400 uppercase">{exp.role}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Projects</h2>
            <div className="grid grid-cols-2 gap-6">
              {projects.map((proj, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <h3 className="font-bold text-sm mb-1">{proj.name}</h3>
                  <p className="text-[10px] font-bold text-neutral-400 mb-2 uppercase">{proj.tech}</p>
                  <p className="text-xs text-neutral-600 line-clamp-3">{proj.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex-1 space-y-10 border-l border-neutral-100 pl-8">
           <section>
             <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Education</h2>
             <div className="space-y-6">
               {education.map((edu, i) => (
                 <div key={i}>
                   <h3 className="font-bold text-sm">{edu.college}</h3>
                   <p className="text-xs text-neutral-600">{edu.course}</p>
                   <p className="text-[10px] font-bold text-neutral-400 mt-1">{edu.year}</p>
                 </div>
               ))}
             </div>
           </section>

           <section>
             <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Skills</h2>
             <div className="space-y-4">
                {[
                  { label: "Languages", value: skills.languages },
                  { label: "Web", value: skills.frameworks },
                  { label: "Databases", value: skills.databases },
                  { label: "Cloud", value: skills.cloud }
                ].map((s, i) => s.value ? (
                  <div key={i}>
                    <p className="text-[10px] font-black text-neutral-400 uppercase mb-1">{s.label}</p>
                    <p className="text-xs font-medium text-neutral-700">{s.value}</p>
                  </div>
                ) : null)}
             </div>
           </section>

           <section>
             <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-4">Achievements</h2>
             <ul className="space-y-3">
                {achievements.map((ach, i) => (
                  <li key={i} className="text-xs text-neutral-600 flex gap-2">
                    <span className="text-blue-500">•</span>
                    {ach}
                  </li>
                ))}
             </ul>
           </section>
        </div>
      </div>
    </div>
  );
}