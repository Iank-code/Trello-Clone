import { Medal } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4 items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task management
        </div>

        <h1 className="text-3xl md:text-6xl text-center mb-6 text-neutral-800">
          Taskify helps team move
        </h1>

        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
            work forward.
        </div>
      </div>
    </div>
  );
}
