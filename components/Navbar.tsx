import { Button } from "./Button";

export function Navbar() {
  return (
    <div className="fixed left-1/2 top-0 z-50 mt-6 w-11/12 -translate-x-1/2">
      <div className="w-full rounded-full border bg-black/50 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center py-4 px-6">
          <div className="text-2xl">haydakiwi</div>

          <div className="flex flex-row gap-2">
            <Button link="">Home</Button>
            <Button link="">About</Button>
            <Button link="">Portfolio</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
