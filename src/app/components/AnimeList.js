'use client'

import Image from "next/image"
import Link from "next/link"

export default function AnimeList({title, images, id}) {
    return (
        <Link href={`/details/${id}`} className="cursor-pointer">
            <Image src={images} width={350} height={350} />
            <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
        </Link>
    )
}