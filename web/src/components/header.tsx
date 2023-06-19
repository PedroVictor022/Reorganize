"use client";

import { User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-transparent text-black font-mono w-full">
      
      <div>
        <h1 className="text-4xl">Reorganize</h1>
      </div>
      <div>
         <button>New note</button>
      </div>
    </header>
  );
}
