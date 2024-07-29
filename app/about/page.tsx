import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mail, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col px-12 gap-6 my-32">
        <Image 
        src={"/images/head.svg"}
        width={82}
        height={96}
        ></Image>
        <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-zinc-400">Hi I'm Guilherme –</h2>
        <h1 className=" font-extrabold text-6xl">
          Creating designs that work{" "}
          <span className="text-zinc-400">
            — for your users, your team and your business.
          </span>
        </h1>
        </div>
        <div className="flex flex-row gap-2">
          <h3 className="font-bold text-2xl">Explore My Projects</h3>
          <Image 
        src={"/images/arrow-64.svg"}
        width={82}
        height={96}
        ></Image>
        </div>
      </div>
      <Button className="bg-rose-500 text-zinc-50 hover:bg-rose-400">
      <MessageSquare className="mr-2 h-4 w-4" /> Let’s create together
      </Button>
    </main>
  );
}
