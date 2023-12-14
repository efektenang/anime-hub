'use client'

import Link from "next/link";
import Image from "next/image";
import { ArrowSquareLeft } from "@phosphor-icons/react";

export default function Collection() {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center m-4">
        <h3 className="text-2xl text-black font-bold">My Collections</h3>
        <span>
          <ArrowSquareLeft size={40} color="#151414" weight="bold" />
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-2 m-3">
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
        <Link href="/" className="relative border-2 border-sky-900">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="absolute flex items-center justify-center bottom-0 w-full bg-sky-900">
            <h5 className="text-xl text-center text-white m-2">Judul</h5>
          </div>
        </Link>
      </div>
    </section>
  );
}
