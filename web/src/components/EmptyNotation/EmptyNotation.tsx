import Link from "next/link";

export function EmptyNotations() {
  return (
    <div className="w-1/2 h-auto flex items-center justify-center">
     <div>
       <p>You still don&apos;t have any notes...</p>
      <Link 
        href=""
        className="underline "
      >Click here</Link>
     </div>
    </div>
  );
}
