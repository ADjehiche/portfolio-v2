"use client";
import { motion } from "framer-motion";

export default function Textbubble({ text }: { text: string }) {
  return (
    <div className="md:w-1/3 w-full mx-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xs p-3 bg-[#303030] rounded-2xl text-white self-end md:mx-5 ml-auto "
      >
        {text}
      </motion.div>
    </div>
  );
}
