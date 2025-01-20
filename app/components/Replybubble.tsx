"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import acildj from "@/public/acildj.jpeg";

export default function ReplyBubble({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="w-2/3 flex flex-row mx-4">
      <Image
        src={acildj}
        alt="Acil Djehiche Profile"
        className="rounded-full w-10 h-10 my-2 border-white border-[1px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-fit inline-block p-3 rounded-lg text-white self-start"
      >
        {displayedText}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="border-r-4 border-white"
        ></motion.span>
      </motion.div>
    </div>
  );
}
