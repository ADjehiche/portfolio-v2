import Image from "next/image";
import Link from "next/link";
import acilprofile from "@/public/acildj.jpeg";
export default function Header() {
  return (
    <div className="w-screen bg-[#2f2f2f] p-4 justify-between flex flex-row">
      <Link href="/" className="my-auto">
        AcilGPT
      </Link>
      <a href="https://www.linkedin.com/in/acil-djehiche/" target="_blank">
        <Image
          alt="Acil profile"
          className="rounded-full w-8 h-8 border-white border-[1px] my-auto"
          src={acilprofile}
        ></Image>
      </a>
    </div>
  );
}
