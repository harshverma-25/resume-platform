"use client";

import { useState } from "react";
import { useResumeStore } from "@/store/resumeStore";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input"; // Will create this
import { Textarea } from "@/components/ui/Textarea"; // Will create this
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Plus, 
  Trash2,
  Save,
  Wand2
} from "lucide-react";
import { cn } from "@/lib/utils";
import ModernTemplate from "@/components/resume-templates/ModernTemplate";
import MinimalTemplate from "@/components/resume-templates/MinimalTemplate";
import ProfessionalTemplate from "@/components/resume-templates/ProfessionalTemplate";
import { useRouter } from "next/navigation";

const STEPS = [
  "Heading",
  "Summary",
  "Experience",
  "Education",
  "Skills",
  "Projects",
  "Achievements"
];

export default function BuilderPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isImproving, setIsImproving] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const { 
    resumeData, 
    setHeading, 
    setSummary, 
    addEducation, 
    setEducation,
    removeEducation,
    addExperience,
    setExperience,
    removeExperience,
    addProject,
    setProjects,
    removeProject,
    addAchievement,
    setAchievements,
    removeAchievement,
    setSkills,
    loadResume
  } = useResumeStore();

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const improveAIText = async (type: 'experience' | 'project' | 'achievement', index: number, field?: string) => {
    const textToImprove = type === 'experience' 
        ? resumeData.experience[index].description 
        : type === 'project' 
            ? resumeData.projects[index].description 
            : resumeData.achievements[index];

    if (!textToImprove) return;

    setIsImproving(`${type}-${index}`);
    try {
      const res = await fetch("/api/ai/improve", {
        method: "POST",
        body: JSON.stringify({ text: textToImprove, type }),
      });
      const data = await res.json();
      
      if (type === 'experience') {
         const updated = [...resumeData.experience];
         updated[index].description = data.result;
         setExperience(updated);
      } else if (type === 'project') {
         const updated = [...resumeData.projects];
         updated[index].description = data.result;
         setProjects(updated);
      } else {
         const updated = [...resumeData.achievements];
         updated[index] = data.result;
         setAchievements(updated);
      }
    } catch (error) {
       console.error("AI Error:", error);
    } finally {
       setIsImproving(null);
    }
  };

  const saveResume = async () => {
    setIsSaving(true);
    try {
      const res = await fetch("/api/resumes", {
        method: "POST",
        body: JSON.stringify(resumeData),
      });
      if (res.ok) {
        const saved = await res.json();
        router.push(`/resumes`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-120px)] gap-8 animate-fade-in">
      {/* Left: Form Panel */}
      <div className="w-1/2 flex flex-col bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
        <header className="p-6 border-b border-neutral-800 bg-black/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center font-bold">
               {currentStep + 1}
            </div>
            <div>
               <h2 className="text-xl font-bold">{STEPS[currentStep]}</h2>
               <p className="text-xs text-neutral-500 uppercase tracking-widest mt-0.5">Step {currentStep + 1} of {STEPS.length}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={handleBack} disabled={currentStep === 0}>
               <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleNext} disabled={currentStep === STEPS.length - 1}>
               <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
           {/* Step Content */}
           {currentStep === 0 && (
             <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-400">Full Name</label>
                      <Input placeholder="John Doe" value={resumeData.basicInfo.name} onChange={(e) => setHeading({ name: e.target.value })} />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-400">Job Title</label>
                      <Input placeholder="Full Stack Developer" value={resumeData.basicInfo.title} onChange={(e) => setHeading({ title: e.target.value })} />
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-400">Email</label>
                      <Input placeholder="john@example.com" value={resumeData.basicInfo.email} onChange={(e) => setHeading({ email: e.target.value })} />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-400">Phone</label>
                      <Input placeholder="+91 9876543210" value={resumeData.basicInfo.phone} onChange={(e) => setHeading({ phone: e.target.value })} />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-neutral-400">LinkedIn</label>
                   <Input placeholder="linkedin.com/in/johndoe" value={resumeData.basicInfo.linkedin} onChange={(e) => setHeading({ linkedin: e.target.value })} />
                </div>
             </div>
           )}

           {currentStep === 1 && (
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <label className="text-sm font-medium text-neutral-400">Professional Summary</label>
                   <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300 gap-1.5 h-8">
                      <Wand2 className="w-3.5 h-3.5" />
                      Auto-generate
                   </Button>
                </div>
                <Textarea 
                   placeholder="Describe your professional background and key strengths..." 
                   className="min-h-[200px]"
                   value={resumeData.summary}
                   onChange={(e) => setSummary(e.target.value)}
                />
             </div>
           )}

           {currentStep === 2 && (
             <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className="p-6 rounded-2xl bg-black/40 border border-neutral-800 space-y-4 relative group">
                     <button 
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                     >
                        <Trash2 className="w-4 h-4" />
                     </button>
                     <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Company" value={exp.company} onChange={(e) => {
                           const updated = [...resumeData.experience];
                           updated[index].company = e.target.value;
                           setExperience(updated);
                        }} />
                        <Input placeholder="Role" value={exp.role} onChange={(e) => {
                           const updated = [...resumeData.experience];
                           updated[index].role = e.target.value;
                           setExperience(updated);
                        }} />
                     </div>
                     <Textarea 
                        placeholder="Key responsibilities and achievements..." 
                        value={exp.description}
                        onChange={(e) => {
                           const updated = [...resumeData.experience];
                           updated[index].description = e.target.value;
                           setExperience(updated);
                        }}
                     />
                     <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full gap-2"
                        onClick={() => improveAIText('experience', index)}
                        isLoading={isImproving === `experience-${index}`}
                     >
                        <Sparkles className="w-4 h-4" />
                        AI Refine Bullet Points
                     </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2" onClick={addExperience}>
                   <Plus className="w-4 h-4 mr-2" /> Add Experience
                </Button>
             </div>
           )}

           {/* Other Steps would follow a similar pattern... */}
        </div>

        <footer className="p-6 border-t border-neutral-800 bg-black/20 flex items-center justify-between">
           <p className="text-xs text-neutral-500">Progress automatically saved in browser</p>
           <Button variant="primary" className="gap-2 px-6" onClick={saveResume} isLoading={isSaving}>
              <Save className="w-4 h-4" />
              Save Resume
           </Button>
        </footer>
      </div>

      {/* Right: Preview Panel */}
      <div className="w-1/2 flex flex-col">
         <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-neutral-400 uppercase tracking-widest text-xs">Live Preview</h3>
            <div className="flex gap-2">
               {['modern', 'minimal', 'professional'].map((t) => (
                  <button 
                    key={t}
                    onClick={() => useResumeStore.getState().setTemplate(t)}
                    className={cn(
                       "px-3 py-1 text-xs rounded-full border transition-all capitalize",
                       resumeData.templateId === t ? "bg-white text-black border-white" : "border-neutral-800 text-neutral-500 hover:text-white"
                    )}
                  >
                     {t}
                  </button>
               ))}
            </div>
         </div>
         <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-2xl p-4 origin-top scale-[0.9] -mt-10 mb-[-5%] overflow-y-auto">
            {resumeData.templateId === 'minimal' && <MinimalTemplate resume={resumeData} />}
            {resumeData.templateId === 'professional' && <ProfessionalTemplate resume={resumeData} />}
            {resumeData.templateId === 'modern' && <ModernTemplate resume={resumeData} />}
         </div>
      </div>
    </div>
  );
}
