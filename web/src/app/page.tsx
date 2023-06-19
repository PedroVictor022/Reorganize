import { EmptyNotations } from "@/components/EmptyNotation";
import { Initial } from "@/components/initial";

export default function Home() {
  return (
    <main className="w-full h-screen flex  bg-gradient-to-tr from-slate-200 to-zinc-300 text-black font-mono">
      <Initial />
      <EmptyNotations />
    </main>
  )
}
