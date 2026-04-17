import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center">
              <span className="text-black font-black text-lg">R</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Antigravity</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <Link href="/feed" className="hover:text-white transition-colors">Community</Link>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <SignedOut>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="primary" size="sm">Go to Dashboard</Button>
              </Link>
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-blue-500 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-purple-500 blur-[100px] rounded-full mix-blend-screen animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Resume Transformation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 animate-fade-in [animation-delay:200ms]">
            Build a resume that gets you <br />
            <span className="gradient-text">hired by top companies.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:400ms]">
            Stop battling ATS filters. Use our AI-powered builder to create stunning, professional resumes and get expert feedback in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Link href="/builder">
              <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-2xl gap-2 text-base shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20">
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/feed">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-2xl gap-2 text-base border-white/10">
                Explore Community
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Preview Image */}
        <div className="mt-20 max-w-6xl mx-auto rounded-3xl overflow-hidden glass border border-white/10 p-4 animate-fade-in [animation-delay:800ms] shadow-2xl">
          <div className="aspect-[16/9] bg-neutral-900 rounded-2xl flex items-center justify-center">
             <div className="text-neutral-600 flex flex-col items-center gap-4">
                <FileText className="w-16 h-16 opacity-20" />
                <p className="text-sm font-medium tracking-widest uppercase">Live Builder Preview</p>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 mb-10">Trusted by software engineers at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40">
             {/* Replace with real logos or SVGs */}
             <span className="text-xl font-bold">Google</span>
             <span className="text-xl font-bold">Amazon</span>
             <span className="text-xl font-bold">Meta</span>
             <span className="text-xl font-bold">Microsoft</span>
             <span className="text-xl font-bold">Netflix</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Tailored for the modern job market with AI at the core of every step.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Optimization",
                desc: "Automatically improve your bullet points and impact statements using industry-leading AI.",
                icon: Zap,
                color: "bg-blue-500"
              },
              {
                title: "ATS Score Checker",
                desc: "Upload any resume and get a detailed score with actionable tips to bypass automated filters.",
                icon: ShieldCheck,
                color: "bg-green-500"
              },
              {
                title: "Premium Templates",
                desc: "Choose from minimalist to modern templates that are both beautiful and ATS-friendly.",
                icon: FileText,
                color: "bg-purple-500"
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="glass p-10 rounded-[2.5rem] group hover:bg-white/[0.05] transition-all duration-300">
                  <div className={cn("w-14 h-14 rounded-2xl mb-8 flex items-center justify-center", feature.color)}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-32 px-6 relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to level up your career?</h2>
          <Link href="/builder">
            <Button variant="primary" size="lg" className="rounded-2xl h-16 px-12 text-lg">
              Get Started for Free
            </Button>
          </Link>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
             <p>© 2024 Antigravity AI Resume Platform. Built with Next.js.</p>
             <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Ensure cn is imported
import { cn } from "@/lib/utils";