import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import acilprofile from "@/public/acildj.jpeg";
import linkedinprofile from "@/public/linkedinIcon.svg";
export default function Header() {
  return (
    <div className="w-screen bg-[#2f2f2f] p-4 justify-between flex flex-row">
      <Menu>
        <MenuButton className=" py-2 inline-flex items-center rounded-full text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-white">
          <Image
            src={acilprofile}
            className="rounded-full w-8 h-8"
            alt="Acils profile pic"
          ></Image>
        </MenuButton>
        <MenuItems anchor="bottom" className="px-2 gap-2">
          <MenuItem>
            <a
              href="https://linkedin.com/in/acil-djehiche"
              target="_blank"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              LinkedIn
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://github.com/ADjehiche"
              target="_blank"
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
            >
              GitHub
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Link
        href="/"
        className="my-auto font-bold font-mono hover:scale-105 duration-200 bg-white/10 p-2 rounded-lg"
      >
        AcilGPT
      </Link>
    </div>
  );
}
