import { User } from "lucide-react";

export function SingIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="font-semibold flex items-center gap-3 text-left transition-colors"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800">
        <User className="h-5 w-5" />
      </div>
      <p className="max-w-[140px] text-sm leading-snug text-gray-500 hover:text-gray-50 transition-all">
        <span className="underline">Create your account</span> to start using
      </p>
    </a>
  );
}
