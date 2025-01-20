"use client";
import Textbubble from "@/app/components/Textbubble";
import ReplyBubble from "@/app/components/Replybubble";
import { useRouter } from "next/navigation";

import { Button } from "@headlessui/react";
export default function About() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen bg-[#212121] justify-start md:w-full">
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
  );
}
