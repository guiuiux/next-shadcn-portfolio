import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Mail, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main
      className="flex min-h-screen
    gap-16 flex-col items-center my-32 p-4"
    >
      <div className="flex flex-col px-1 gap-6 my-32">
        <Image src={"/images/head.svg"} width={82} height={96}></Image>
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl text-zinc-400">
            Hi I'm Guilherme –
          </h2>
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
            color="fff"
          ></Image>
        </div>
      </div>
      <Button className="bg-rose-500 text-zinc-50 hover:bg-rose-400">
        <MessageSquare className="mr-2 h-4 w-4" /> Let’s create together
      </Button>
      <div>
        <h4 className="text-zinc-500 text-xl font-bold">
          Trusted by Leading Brands
        </h4>
      </div>
      <div className="flex flex-col gap-14 text-center">
        <span className="text-zinc-500">Featured work</span>
        {/* Project Card */}
        <div className="flex flex-col align-middle w-full">
        <div className="flex flex-col bg-zinc-100 rounded-3xl gap-8 p-6 w-fit">
          <Image
            src={"/images/project-thumbnail.png"}
            width={278}
            height={278}
          ></Image>


          
            <div className="text-sm text-center font-normal text-zinc-500">
              {" "}
              Sistema Mackenzie de Ensino
            </div>
            <div className="text-3xl text-center font-bold">
              SME Digital: Livro
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Badge className="font-normal text-zinc-700" variant="outline">
                Acessibility
              </Badge>
              <Badge className="font-normal text-zinc-700" variant="outline">
                Design System
              </Badge>
              <Badge className="font-normal text-zinc-700" variant="outline">
                Figma
              </Badge>
              <Badge className="font-normal text-zinc-700" variant="outline">
                Interaction
              </Badge>
              <Badge className="font-normal">
                Mobile App
              </Badge>
              <Badge className="font-normal text-zinc-700" variant="outline">
                UI/UX
              </Badge>
            </div>
          </div>
          <CardContent></CardContent>
        </div>
      </div>
    </main>
  );
}
