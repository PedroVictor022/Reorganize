import { EmptyNotations } from "@/components/EmptyNotation/EmptyNotation";
import { Initial } from "@/components/Initial/initial";


export default function Home() {
  return (
    <main className="w-full h-screen flex bg-zinc-900 text-slate-200 font-mono pt-6 px-14">
      <Initial />
      <EmptyNotations />
    </main>
  )
}
