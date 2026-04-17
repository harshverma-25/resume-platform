"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Textarea";
import { Search, CheckCircle2, AlertCircle, Sparkles, Binary } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AtsCheckerPage() {
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ score: number; suggestions: string[] } | null>(null);

  const handleAnalyze = async () => {
    if (!resumeText) return;
    setIsAnalyzing(true);
    try {
      const res = await fetch("/api/ats", {
        method: "POST",
        body: JSON.stringify({ resumeText }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
      <header>
        <h1 className="text-4xl font-black mb-2">ATS Resume Checker</h1>
        <p className="text-neutral-500 text-lg font-medium">Test your resume against the industry standards with AI.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left: Input */}
        <div className="md:col-span-3 space-y-6">
           <div className="glass p-8 rounded-[2.5rem] border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                 <h3 className="font-bold flex items-center gap-2">
                    <Binary className="w-4 h-4 text-blue-400" />
                    Paste Resume Content
                 </h3>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Max 5000 chars</span>
              </div>
              <Textarea 
                placeholder="Paste the text from your PDF or Word document here..." 
                className="min-h-[400px] bg-black/40 border-neutral-800 rounded-3xl"
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
              />
              <Button 
                variant="primary" 
                className="w-full h-16 rounded-2xl text-lg font-bold gap-2"
                onClick={handleAnalyze}
                isLoading={isAnalyzing}
                disabled={!resumeText}
              >
                <Search className="w-5 h-5" />
                Analyze Performance
              </Button>
           </div>
        </div>

        {/* Right: Results */}
        <div className="md:col-span-2 space-y-6">
           {result ? (
             <div className="space-y-6">
                <div className="glass p-10 rounded-[2.5rem] border-white/5 text-center">
                   <p className="text-sm font-black uppercase tracking-[0.2em] text-neutral-500 mb-6">ATS Score</p>
                   <div className="relative inline-flex items-center justify-center p-1">
                      <svg className="w-40 h-40">
                         <circle
                           className="text-neutral-800"
                           strokeWidth="8"
                           stroke="currentColor"
                           fill="transparent"
                           r="70"
                           cx="80"
                           cy="80"
                         />
                         <circle
                           className={cn(
                             result.score > 80 ? "text-green-500" : result.score > 50 ? "text-orange-500" : "text-red-500"
                           )}
                           strokeWidth="8"
                           strokeDasharray={440}
                           strokeDashoffset={440 - (440 * result.score) / 100}
                           strokeLinecap="round"
                           stroke="currentColor"
                           fill="transparent"
                           r="70"
                           cx="80"
                           cy="80"
                         />
                      </svg>
                      <span className="absolute text-5xl font-black">{result.score}</span>
                   </div>
                </div>

                <div className="glass p-8 rounded-[2.5rem] border-white/5">
                   <h3 className="font-bold mb-6 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      Key Suggestions
                   </h3>
                   <div className="space-y-4">
                      {result.suggestions.map((s, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                           <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                           <p className="text-sm text-neutral-300 leading-relaxed font-medium">{s}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
           ) : (
             <div className="glass h-full p-10 rounded-[2.5rem] border-white/5 border-dashed flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6">
                   <AlertCircle className="w-8 h-8 text-neutral-600" />
                </div>
                <h3 className="font-bold text-neutral-400 mb-2">No Analysis Yet</h3>
                <p className="text-sm text-neutral-600">Paste your resume text and run the checker to see your score and suggestions.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
