import Link from "next/link";

type ButtonProps = {
  text: string;
  link?: string;
};
export function Button({ text, link }: ButtonProps) {
  return (
    <>
      {link ? (
        <Link href={link ?? ""}>
          <div className="border pt-2 pb-2 pl-3 pr-3 rounded-xl bg-white text-black hover:bg-blue-300 cursor-pointer transition-colors duration-300">
            {text}
          </div>
        </Link>
      ) : (
        <div className="border pt-2 pb-2 pl-3 pr-3 rounded-xl bg-white text-black hover:bg-blue-300 cursor-pointer transition-colors duration-300">
          {text}
        </div>
      )}
    </>
  );
}
