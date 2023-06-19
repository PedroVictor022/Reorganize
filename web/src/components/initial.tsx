import { User } from "lucide-react";

export function Initial() {
  return (
    <div className="w-1/2 h-screen px-6 flex flex-col items-start justify-between">
      <div className="flex gap-2 pt-10">
        <User className="h-5 w-5 text-gray-700" />
        <a href="" className="font-semibold ">Sing up</a>
      </div>
      <div>
        <h1 className="text-4xl font-semibold">
          Organize your <span className="text-blue-600">life</span> with
          Reorganize
        </h1>
        <p>Write your notes and record important tasks 100% online</p>
        <button className="py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all mt-4">
          Create a new anotation
        </button>
      </div>
      <div className="invisible"/>
    </div>
  );
}
