import Link from "next/link";
import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  link?: string;
};

export function Button({ children, link }: ButtonProps) {
  const content = (
    <div className="flex flex-row gap-2 border items-center pt-1 pb-1 pl-3 pr-3 rounded-xl bg-white text-black hover:bg-blue-300 cursor-pointer transition-colors duration-300">
      {children}
    </div>
  );
  return <>{link ? <Link href={link ?? ""}>{content}</Link> : content}</>;
}
