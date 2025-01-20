"use client";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function SuggestionButton({ text }: { text: string }) {
  const router = useRouter();
  return (
    <div>
      <Button
        onClick={() => router.push(`/${text}`)}
        className="gap-1.5 hover:scale-110 hover:text-white hover:bg-[#2f2f2f] duration-200 rounded-full border-[#2a2a2a] border-[1px] text-center bg-[#212121] px-5 py-3 text-sm/6 text-[#a1a1a1] focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
      >
        {text}
      </Button>
    </div>
  );
}
