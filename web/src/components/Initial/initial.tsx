import { NewNotation } from "../NewNotation";
import { SingIn } from "../singIn";

export function Initial() {
  return (
    <div className="w-1/2 h-auto flex flex-col items-start justify-between">
      <SingIn />
      <NewNotation />
      <div className="invisible" />
    </div>
  );
}
