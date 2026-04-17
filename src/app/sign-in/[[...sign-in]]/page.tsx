import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="relative">
         {/* Glow Background */}
         <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full" />
         <SignIn 
           appearance={{
             elements: {
               rootBox: "relative z-10",
               card: "bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl",
               headerTitle: "text-white text-3xl font-black tracking-tight",
               headerSubtitle: "text-neutral-500",
               formButtonPrimary: "bg-white text-black hover:bg-neutral-200 rounded-xl h-12 text-sm font-bold transition-all",
               formFieldLabel: "text-neutral-400 text-xs font-bold uppercase tracking-widest",
               formFieldInput: "bg-black/40 border-neutral-800 rounded-xl h-12 text-white px-4",
               footerActionLink: "text-blue-400 hover:text-blue-300",
               dividerLine: "bg-neutral-800",
               dividerText: "text-neutral-600",
               socialButtonsBlockButton: "bg-black/40 border border-neutral-800 rounded-xl h-12 hover:bg-neutral-800 transition-all",
               socialButtonsBlockButtonText: "text-white font-medium",
             }
           }}
         />
      </div>
    </div>
  );
}
