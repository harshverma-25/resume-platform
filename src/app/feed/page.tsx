import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  Heart, 
  MessageSquare, 
  Download, 
  Search,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default async function FeedPage() {
  // This will be a server component fetching from the DB.
  // For now, let's build the premium layout with static data structure.
  
  const posts = [
    {
      id: "1",
      name: "Saurabh Mishra",
      role: "Backend Architect",
      upvotes: 42,
      comments: 12,
      preview: "/placeholder-resume.png",
      tags: ["Node.js", "Redis", "System Design"]
    },
    {
       id: "2",
       name: "Ananya Gupta",
       role: "Frontend Engineer",
       upvotes: 89,
       comments: 24,
       preview: "/placeholder-resume.png",
       tags: ["React", "Motion", "Tailwind"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 animate-fade-in">
       <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
             <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-black mb-4">Community Feed</h1>
                <p className="text-neutral-500 font-medium text-lg leading-relaxed">
                   Explore successful resumes from software engineers at Google, Meta, and top startups. 
                   Get inspired and see what works.
                </p>
             </div>
             <div className="flex gap-4 w-full md:w-auto">
                <div className="flex-1 md:w-80 relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                   <input 
                      className="w-full h-14 bg-neutral-900 border border-neutral-800 rounded-2xl pl-12 pr-4 text-sm focus:border-neutral-600 transition-all outline-none" 
                      placeholder="Search roles or tech..."
                   />
                </div>
                <Button variant="primary" className="h-14 rounded-2xl px-8">Latest</Button>
             </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {posts.map((post) => (
                <div key={post.id} className="group glass rounded-[2.5rem] border-white/5 overflow-hidden flex flex-col hover:bg-white/[0.04] transition-all duration-300">
                   {/* Preview Area */}
                   <div className="aspect-[3/4] bg-neutral-900 relative p-6 overflow-hidden">
                      <div className="h-full w-full bg-white rounded-xl shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
                      <Link href={`/feed/${post.id}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                         <Button variant="primary" className="rounded-full h-14 px-8 gap-2 shadow-2xl">
                            View Full Resume
                            <ArrowUpRight className="w-5 h-5" />
                         </Button>
                      </Link>
                   </div>

                   {/* Content */}
                   <div className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                         <div>
                            <h3 className="text-xl font-bold">{post.name}</h3>
                            <p className="text-sm text-neutral-500 font-medium">{post.role}</p>
                         </div>
                         <div className="flex gap-1">
                            {post.tags.slice(0, 2).map((t, i) => (
                               <span key={i} className="px-2 py-1 text-[10px] uppercase font-black tracking-widest bg-white/5 border border-white/10 rounded-md text-neutral-400">{t}</span>
                            ))}
                         </div>
                      </div>

                      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                         <div className="flex items-center gap-6">
                            <span className="flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-red-500 transition-colors cursor-pointer group/action">
                               <Heart className="w-5 h-5 group-hover/action:fill-red-500 group-hover/action:stroke-red-500" />
                               {post.upvotes}
                            </span>
                            <span className="flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-blue-500 transition-colors cursor-pointer group/action">
                               <MessageSquare className="w-5 h-5" />
                               {post.comments}
                            </span>
                         </div>
                         <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full border border-white/5">
                            <Download className="w-4 h-4" />
                         </Button>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
}
