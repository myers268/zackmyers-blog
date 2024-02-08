import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Zack Myers' Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="p-md flex justify-center">
        <div className="max-w-[70ch] text-center text-balance">
          <h1>A space for me to gather my thoughts and share them with others</h1>
        </div>
      </div>
      <div className="mx-auto max-w-[75ch] text-justify flex flex-col gap-sm">
        <p>
          Hey there, I'm <Link className="text-primary" to="about">Zack Myers</Link>! This is a place for me to muse about the web and try out new ideas; to write about what works, what doesn't, and everything inbetween. It's primarily a place for me, but If you find it useful that's great too.
        </p>
        <p>
          
        </p>
      </div>
    </>
  );
}
