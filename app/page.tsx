import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border p-6 rounded-xl w-3/4 h-[400px] flex flex-col justify-around">
        <div className="text-4xl text-center">
          sup i hayden like strawberries
        </div>
        <div>I like CompSci and Vball</div>
        <div>To be continued</div>
        <div className="flex gap-2 justify-end">
          <Link
            className="border p-2 rounded-xl bg-white text-black"
            href={"https://github.com/haydakiwi"}
          >
            github
          </Link>

          <button className="border p-2 rounded-xl bg-white text-black">
            tbd
          </button>
        </div>
      </div>
    </div>
  );
}
