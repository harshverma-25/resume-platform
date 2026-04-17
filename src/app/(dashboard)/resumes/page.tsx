"use client";

import { useResumeStore } from "@/store/resumeStore";
import { Button } from "@/components/ui/Button";
import { FileText, Download, Trash2, Edit3, Share2, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function MyResumesPage() {
  // Static mocked data for UI representation
  const resumes = [
    { id: "res_1", title: "Standard Tech Resume", template: "modern", date: "Oct 12, 2024" },
    { id: "res_2", title: "Minimal SDE-1", template: "minimal", date: "Oct 10, 2024" },
  ];

  return (
    <div className="space-y-10 animate-fade-in px-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black">My Resumes</h1>
          <p className="text-neutral-500 mt-2 font-medium">Manage and refine your professional portfolio.</p>
        </div>
        <Link href="/builder">
           <Button variant="primary" className="gap-2 h-14 px-8 rounded-2xl shadow-xl shadow-white/5">
              <Plus className="w-5 h-5" />
              Build New
           </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {resumes.map((resume) => (
          <div key={resume.id} className="group glass p-8 rounded-[2.5rem] border-white/5 space-y-8 hover:bg-white/[0.03] transition-all relative">
            <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden p-6 opacity-60 group-hover:opacity-100 transition-opacity">
               <div className="h-full w-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <span className="text-neutral-200 text-6xl font-black opacity-10 uppercase tracking-tighter">Preview</span>
               </div>
            </div>

            <div className="space-y-4">
               <div>
                  <h3 className="text-xl font-bold group-hover:text-white transition-colors">{resume.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                     <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">{resume.template}</span>
                     <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">{resume.date}</span>
                  </div>
               </div>

               <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-3">
                  <Link href={`/builder?id=${resume.id}`} className="w-full">
                     <Button variant="secondary" size="sm" className="w-full gap-2 rounded-xl h-11 border border-white/5">
                        <Edit3 className="w-3.5 h-3.5 text-neutral-400" />
                        Edit
                     </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="w-full gap-2 rounded-xl h-11 border-white/5">
                     <Download className="w-3.5 h-3.5 text-neutral-400" />
                     Export
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full gap-2 rounded-xl h-11 border border-white/5 text-neutral-500 hover:text-white">
                     <Share2 className="w-3.5 h-3.5" />
                     Post
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full gap-2 rounded-xl h-11 border border-white/5 text-neutral-500 hover:text-red-500">
                     <Trash2 className="w-3.5 h-3.5" />
                     Delete
                  </Button>
               </div>
            </div>
          </div>
        ))}

        {/* Empty State / New Slot */}
        <Link href="/builder" className="group">
           <div className="h-full min-h-[500px] border-2 border-dashed border-neutral-800 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center hover:border-neutral-600 transition-all cursor-pointer bg-black/20">
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <Plus className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-400 group-hover:text-white mb-2 transition-colors">Create Another One</h3>
              <p className="text-sm text-neutral-600">You can have multiple resumes for different job applications.</p>
           </div>
        </Link>
      </div>
    </div>
  );
}
