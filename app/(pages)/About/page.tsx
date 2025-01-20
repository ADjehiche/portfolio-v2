"use client";
import Textbubble from "@/app/components/Textbubble";
import ReplyBubble from "@/app/components/Replybubble";
import SuggestionRow from "@/app/components/SuggestionRow";
import SuggestionButton from "@/app/components/SuggestionButton";
import { useRouter } from "next/navigation";

import { Button } from "@headlessui/react";
export default function About() {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="md:w-2/12 bg-[#303030]">
        <Button
          onClick={() => router.push(`/`)}
          className="gap-1.5 hover:text-white hover:bg-[#8b8b8b65] duration-200 m-2 border-[#2a2a2a] border-[1px] text-center bg-[#212121] px-5 py-3 text-sm/6 text-[#a1a1a1] focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        >
          AcilGPT
        </Button>
      </div>
      <div className="flex flex-col h-screen bg-[#212121] justify-start md:w-10/12">
        <div className="flex flex-col items-end my-24">
          <Textbubble text="Tell Me About Yourself?" />
        </div>
        <div className="flex flex-col items-center bg-[#212121]">
          <ReplyBubble
            text="Hi there! I'm a passionate computer science student with a knack for solving 
          problems and building innovative projects. From creating a wireless access point with a Raspberry Pi to 
          developing web applications that make an impact, I thrive on learning and pushing the boundaries of what's 
          possible. When i'm not coding, you'll find me rock climbing, playing basketball, or exploring new technologies."
          />
        </div>
      </div>
    </div>
  );
}
