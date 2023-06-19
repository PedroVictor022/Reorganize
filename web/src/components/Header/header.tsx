"use client";

import { FileMinus, User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-transparent bg-zinc-900 text-white font-mono w-full border-b border-b-slate-400">
      
      <div>
        <h1 className="text-4xl">Reorganize</h1>
      </div>
      <div>
         <button className="flex items-center gap-2  text-white bg-blue-600 hover:bg-blue-700 transition-all py-2 px-4 rounded-lg">
          <FileMinus size={15}/>
          New note</button>
      </div>
    </header>
  );
}
