import React from "react";
import Image from "next/image";
import Logo from "../public/logo.webp";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
export default function Navbar() {
  return (
    <div className="p-3 flex bg-white text-black justify-between items-center border-b-2 border-gray-300">
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          title="starbucks"
          height={51}
          width={51}
          priority
        />
      </Link>
      <div className="hidden font-medium md:flex gap-12">
        <Link href="/menu" className="hover:text-green-900">
          MENU
        </Link>
        <Link href="/Rewards" className="hover:text-green-900">
          REWARDS
        </Link>
        <Link href="/gift-cards" className="hover:text-green-900">
          GIFT CARDS
        </Link>
      </div>
      <div className="hidden md:flex hover:text-green-900">
        <IoLocationSharp size={24} color="black" />
        <Link
          href="https://www.starbucks.com/store-locator"
          className="font-bold"
        >
          Find a store
        </Link>
      </div>
      <div className="flex gap-2">
        <Button className="hidden md:flex gap-2 items-center text-black bg-transparent hover:bg-transparent border border-gray-400 hover:border-gray-600 px-6 py-2 rounded-full">
          Sign in
        </Button>
        <Button className="hidden md:flex gap-2 items-center text-white bg-black hover:bg-black border border-gray-400 hover:border-gray-600 px-6 py-2 rounded-full">
          Join now
        </Button>
      </div>
    </div>
  );
}
