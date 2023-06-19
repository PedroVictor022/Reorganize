"use client";

import { User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-200 text-black font-mono w-full">
      <div className="flex gap-2">
        <User className="h-5 w-5 text-gray-700"/>
        <a href="">Entrar</a>
      </div>
      <div>
        <h1 className="text-3xl">Reorganize</h1>
      </div>
      <div>
         <button>Novo projeto</button>
      </div>
    </header>
  );
}
