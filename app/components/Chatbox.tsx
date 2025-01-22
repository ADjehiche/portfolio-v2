"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function Chatbox() {
  const text = "Message AcilGPT... ";
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      onClick={() => router.push("/Chat")}
      className="hover:scale-105 hover:text-white md:w-2/3 w-fit mx-auto bg-[#2f2f2f] duration-200 rounded-2xl border-[#2a2a2a] border-[1px] text-center p-7 text-sm/6 text-[#a1a1a1] focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
    >
      <div className="relative w-fit overflow-hidden whitespace-nowrap text-white md:text-xl font-mono text-lg">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          {displayedText}
        </motion.span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="border-r-4 border-white mr-2"
        ></motion.span>
      </div>
    </Button>
  );
}
