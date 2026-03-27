import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";
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
          <Button text="GitHub" link="https://github.com/haydakiwi" />
          <Button
            text="LinkedIn"
            link="https://www.linkedin.com/in/hayden-lin-572934388/"
          />
        </div>
      </div>
    </div>
  );
}
