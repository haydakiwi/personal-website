import { ExternalLink } from "lucide-react";
import { Button } from "../components/Button";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <Image
          src="/background.jpg"
          alt="background"
          fill
          className="object-cover brightness-50 -z-10"
        />

        <div className="h-screen flex justify-center items-center">
          <div className="border p-6 rounded-xl w-3/4 h-60 flex flex-col justify-between z-10 bg-black/50 backdrop-blur-md">
            <div className="text-4xl text-left">
              sup i hayden like strawberries
            </div>
            <div className="text-center text-xl">I like CompSci and Vball</div>
            <div className="flex gap-2 justify-end">
              <Button link="https://github.com/haydakiwi">
                GitHub <ExternalLink size={16} />
              </Button>
              <Button link="https://www.linkedin.com/in/hayden-lin-572934388/">
                LinkedIn <ExternalLink size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">{/* next section */}</div>
    </>
  );
}
