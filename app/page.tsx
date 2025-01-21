"use client";
import Chatbox from "./components/Chatbox";
import Header from "./components/Header";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#212121]">
      <Header />
      <div className="flex flex-col gap-5 w-2/3 h-full justify-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 5,
          }}
          viewport={{ once: true }}
          className="md:text-4xl font-bold mx-auto text-2xl font-mono"
        >
          What Can I Help With?
        </motion.h1>
        <br />
        <Chatbox />
      </div>
    </div>
  );
}
