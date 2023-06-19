"use client";
export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-slate-200 text-black">
      <div className="flex flex-col">
        <a href="">Entrar</a>
        <a href="">Não tem uma conta? Clique aqui</a>
      </div>
      <div>
         <button>Novo projeto</button>
      </div>
    </header>
  );
}
