import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { 
  Plus, 
  FileText, 
  TrendingUp, 
  Users 
} from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user.firstName} 👋</h1>
          <p className="text-neutral-500 mt-1">Ready to land your dream job? Let's refine your resume.</p>
        </div>
        <Link href="/builder">
          <Button variant="primary" className="gap-2">
            <Plus className="w-4 h-4" />
            Create New
          </Button>
        </Link>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Resumes", value: "3", icon: FileText, color: "text-blue-500" },
          { label: "Community Posts", value: "1", icon: Users, color: "text-purple-500" },
          { label: "Profile Views", value: "24", icon: TrendingUp, color: "text-green-500" },
          { label: "ATS Scans", value: "5", icon: Plus, color: "text-orange-500" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="glass p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500 font-medium">{stat.label}</span>
                <Icon className={cn("w-4 h-4", stat.color)} />
              </div>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions / Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="glass p-8 rounded-3xl">
          <h2 className="text-xl font-bold mb-6">Recent Resumes</h2>
          <div className="space-y-4">
             {/* This would be mapped from a DB fetch */}
             <div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-neutral-400" />
                   </div>
                   <div>
                      <p className="font-medium">Software Engineer 2024</p>
                      <p className="text-xs text-neutral-500">Updated 2 days ago</p>
                   </div>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
             </div>
          </div>
          <Link href="/resumes" className="block text-center mt-6 text-sm text-neutral-500 hover:text-white transition-colors">
            View all resumes
          </Link>
        </section>

        <section className="glass p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Check ATS Score</h2>
            <p className="text-neutral-500 mb-6">Our AI will analyze your resume against industry standards.</p>
          </div>
          <div className="p-12 border-2 border-dashed border-neutral-800 rounded-3xl flex flex-col items-center gap-4 hover:border-neutral-600 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
              <Plus className="w-6 h-6 text-neutral-500 group-hover:text-white" />
            </div>
            <p className="text-sm font-medium text-neutral-500 group-hover:text-white">Upload resume (PDF)</p>
          </div>
          <div className="mt-6">
            <Link href="/ats-checker">
              <Button variant="secondary" className="w-full">Open Checker</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper to make cn accessible in this server component if needed, 
// though we usually export it from /lib/utils.
import { cn } from "@/lib/utils";