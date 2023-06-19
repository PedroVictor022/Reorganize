import { CircleDollarSign, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
   return (
      <div className="w-full p-4 flex items-center justify-around bg-zinc-950 text-white">
         <div>
            <p className="font-medium">Created by Pedro Victor 💚</p>
         </div>
         <div className="flex items-center gap-6">
            <Link href="https://www.linkedin.com/in/pedro-victor-75440321a/" target="_blank"><Linkedin className="h-5 w-5 text-blue-600"/></Link>
            <Link href='https://github.com/PedroVictor022' target="_blank">
               <Github className="h-5 w-5"/>
            </Link>
            <Link href='' className="text-emerald-500">
               <CircleDollarSign />
            </Link>
         </div>
      </div>
   )
}